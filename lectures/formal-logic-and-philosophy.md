---
layout: default
title: Formal Logic and Philosophy
permalink: /lectures/formal-logic-and-philosophy/
toc: true
---

## What is logic

- Based on rules that are assumed correct

## "Edifice" (Descartes)

- Law of identity: thing/proposition is itself
	- $p\to p$
- Law of no contradiction: claim and direct denial can't both be true
	- $p\land\lnot p$
- Law of excluded middle
	- $p\lor\lnot p$
- Principle of sufficiency: "nothing is without reason"
	- Sufficient: $p\to q$
	- Necessary: $p\leftarrow q$
	- Uncaused event

## Statement/propository/claims

- Sentence with true value (true/false)
- Atomic proposition: simplified statement/proposition
	- Subject + predicate
		- Linking item: affirmation/negation
	- Universal (all S are P) vs particular (some S are P) proposition


| |Universal|Particular|
|-|-|-|
|Affirmation|All S are P (A)|Some S are P (I)|
|Negation|All S are not P (E)|Some S are not P (O)|


## "Syllogism" (Aristotle)

- Major premise (e.g. "all humans are mortal")
- Minor premise (e.g. "I am a human")
- Conclusion (e.g. "I am mortal")
	- "I": major term (S)
	- "mortal": minor term (P)
	- "human": middle term (M)
- Example formalized:
```
M A P
S I M
-----
S I P
```

### 4 figures

```
M   P
S   M
-----
S   P
```

```
P   M
S   M
-----
S   P
```

```
M   P
M   S
-----
S   P
```

```
P   M
M   S
-----
S   P
```

- 15 out of 256 specific figures are valid

## Compound preposition

- Link of 2 atomic prepositions

### Types

- Conjunctive proposition (and): $p\land q$
- Disjunctive preposition (either...or.../xor)
- Negation (not): $\lnot p$
- Conditional/hypothetical (if...then...): $p\to q$

### Deduction of compound prepositions
