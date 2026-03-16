{
  description = "Dev shell with Nix-managed Bundler 4";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";

    # Define Bundler 4 as a direct input
    bundler-pkg = {
      url = "https://rubygems.org/downloads/bundler-4.0.8.gem";
      flake = false;
    };
  };

  outputs =
    {
      self,
      nixpkgs,
      bundler-pkg,
    }:
    let
      system = "x86_64-linux"; # or "aarch64-linux", etc.
      pkgs = import nixpkgs { inherit system; };

      # Override the default bundler with our input
      bundler4 = pkgs.bundler.overrideAttrs (old: {
        pname = "bundler";
        version = "4.0.8";
        src = pkgs.runCommand "bundler-4.0.8.gem" {} ''
          cp ${bundler-pkg} $out
        '';
      });
    in
    {
      devShells.${system}.default = pkgs.mkShell {
        buildInputs = [
          pkgs.ruby_3_4
          bundler4
        ];

        shellHook = ''
          # Isolate gems to the local project and add their binaries to PATH
          export GEM_HOME="$PWD/.gem"
          export GEM_PATH="$GEM_HOME:$GEM_PATH"
          export PATH="$GEM_HOME/bin:$PATH"

          echo "Environment loaded: $(bundle --version) (Managed by Nix)"

          # Automatically install missing gems if Gemfile.lock doesn't match local .gem/
          bundle check >/dev/null 2>&1 || {
            echo "Gems are missing or out of date. Running bundle install..."
            bundle install
          }
        '';
      };
    };
}
