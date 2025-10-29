---
layout: default
title: Basic Formal Logic
permalink: /lectures/basic-formal-logic/
toc: true
---

# Basic Formal Logic

## What is Logic

- Based on rules that are assumed correct
- Formal Logic focuses on rules and 100% correctness = mathematics
- Not concerned with meaning, only with formal validity

## "Edifice" (Descartes)

Descartes described logic as an edifice (building):

- Foundation consists of basic laws of logic
- Built upon it are deductive and inductive reasoning
- Formal logic follows strict rules to ensure correctness

### Four Laws of Logic

1. **Law of Identity (同一的)**: A proposition is itself, no more and no less
	- $p \to p$
2. **Law of No-Contradiction**: A claim and its direct denial cannot both be true
	- $\lnot (p \land \lnot p)$
3. **Law of Excluded Middle**: Either a proposition or its negation must be true
	- $p \lor \lnot p$
4. **Law of Double Negation**: A double negative equals the positive
	- $p \Leftrightarrow \lnot \lnot p$

### Principle of Sufficiency

- "Nothing is without reason" (存在即有理由)
- **Sufficient**: $p\to q$
- **Necessary**: $p\leftarrow q$
- Raises questions about uncaused events (e.g., Big Bang) and infinite regress

> **Note**: If any one of the four laws is broken, the argument is "invalid"

## Statements/Propositions/Claims

- A sentence with a truth value (true/false)
- Atomic Proposition: Simplified statement/proposition
	- Subject + Predicate
		- Linking item: affirmation/negation
	- Universal (all S are P) vs particular (some S are P) proposition

### Propositional Logic Classification

| |Universal|Particular|
|-|-|-|
|Affirmation|All S are P (A)|Some S are P (I)|
|Negation|All S are not P (E)|Some S are not P (O)|

## Syllogism (三段式) - Aristotle

A syllogism consists of:
- Major premise (e.g., "All humans are mortal")
- Minor premise (e.g., "I am a human")
- Conclusion (e.g., "I am mortal")

### Terms:

- "I": Subject/major term (S)
- "mortal": Predicate/minor term (P)
- "human": middle term (M)

### Example Formalized:

```
M A P    (All humans (M) are mortal (P))
S I M    (I (S) am a human (M))
-----
S I P    (I (S) am mortal (P))
```

### 4 Figures of Syllogism

**Figure 1:**
```
M   P
S   M
-----
S   P
```

**Figure 2:**
```
P   M
S   M
-----
S   P
```

**Figure 3:**
```
M   P
M   S
-----
S   P
```

**Figure 4:**
```
P   M
M   S
-----
S   P
```

- Out of 256 possible specific figures, only 15 are valid

## Compound Propositions

- Compound propositions are formed by linking 2 or more atomic propositions.

### Types of Compound Propositions

- **Conjunctive Proposition (AND)**: $p \land q$
- **Disjunctive Proposition (OR)**: $p \lor q$ (either A or B)
- **Negation (NOT)**: $\lnot p$
- **Conditional/Hypothetical Proposition (IF...THEN)**: $p \to q$
  - **Modus Ponens (肯定前件式)**: Affirming the antecedent
    1. If A, then B: $A \to B$
    2. A: $A$
    3. Therefore B: $B$
  
  - **Modus Tollens (否定后件式)**: Denying the consequent
    1. If A, then B: $A \to B$
    2. Not B: $\lnot B$
    3. Therefore not A: $\lnot A$
    - Equivalent form: $(p\to q)\equiv(\lnot q\to\lnot p)$

### Variables

- Propositional variables: p, q, r, s...
- Used to represent compound statements abstractly

### Deduction Rules for Compound Propositions

- Hypothetical syllogism: $(p\to q, q\to r) \equiv (p \to r)$
- Disjunctive elimination: $(p\lor q, p\to r, q\to s) \equiv (r\lor s)$

### De Morgan's Laws

- $\lnot(p\land q) \Leftrightarrow (\lnot p\lor\lnot q)$
- $\lnot(p\lor q) \Leftrightarrow (\lnot p\land\lnot q)$

Note: In this context, $\lor$ represents inclusive OR, not XOR
