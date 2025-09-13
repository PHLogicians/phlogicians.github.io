# PHGameStudio.github.io

## 1. Quick Start (for organization members)

*If you have pages you want to publish, fork and do the same, then open a pull request.*

```
# 1 · clone this repository
git clone https://github.com/PHGameStudio/phgamestudio.github.io
cd phgamestudio.github.io

# 2 · install gems into .bundle/ (no sudo required)
bundle config set --local path '.bundle'
bundle install

# 3 · launch local server (ctrl-c to stop)
bundle exec jekyll serve
```

The site recompiles automatically when you save files and is served at <http://localhost:4000>.

---

## 2. Adding a New Page

1. **Create a Markdown file** inside the project root.
   Filename = slug (e.g. `my-topic.md`).

2. **Front matter template**

   ```
   ---
   layout: page          # keep as “page” so Minima uses the full-width layout
   title:  "My Topic"    # displayed in browser tab and h1
   permalink: /my-topic/ # clean URL → http://…/my-topic/
   ---
   ```

3. **Write content** below the front matter in regular Markdown.

4. **Decide whether it appears in the top-right navigation**
   - Header links are listed manually in `_config.yml → header_pages:`.
   - To **show** the page, add its filename there.
   - To **hide** the page, do nothing; the page is still reachable via its permalink.

---

## 3. Images & Downloads

- Put assets in `images/` and link relatively: `![Alt text](/images/diagram.png){: width="60%"}`

- Large binaries (PDFs, ZIPs) go in `files/` to keep the repo lean, but for non-embedded files it is recommended to use a link to an external website for download

---

## 4. Working Branches & Deployment

1. **Work on feature branches**: `git checkout -b my-feature`
2. **Test locally**: Always run `bundle exec jekyll serve` and verify your changes work.
3. **Commit logically**: `git add file.md; git commit -am "Add My Topic page"`
4. **Push your branch**: `git push origin my-feature`
5. **Merge when ready**: `git checkout main; git merge my-feature; git push origin main`
6. **Deploy automatically**: GitHub Pages builds and deploys within ~10 minutes after pushing to `main`.

**Note**: You can also work directly on `main` for small changes, but use branches for substantial additions to avoid breaking the live site.

---

## 5. Troubleshooting

| Symptom                           | Fix                                                               |
| --------------------------------- | ----------------------------------------------------------------- |
| `Bundler::PermissionError`        | You skipped `bundle config` – run the commands in Quick Start.    |
| Infinite Sass “import loop” error | Never name files `_sass/minima.scss`; instead edit `assets/main.scss`. |
| 404 on a link                     | Link to `/my-topic/` or `my-topic.html`, **not** `my-topic.md`.   |

---

## 6. Housekeeping Rules

* `_site/`, `.bundle/`, `Gemfile.lock`, caches, etc. are already in `.gitignore`; **do not commit them**.
* `README.md` is excluded from the published site via `_config.yml → exclude:`.
* Keep line length ≤ 100 chars so diffs stay readable.

Happy writing!
