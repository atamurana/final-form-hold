# Final Form Hold

Mutators for holding fields values in [Final Form](https://github.com/final-form/final-form).

---

## Installation

```bash
npm install --save final-form-hold
```

or

```bash
yarn add final-form-hold
```

## Usage

```js
import { createForm } from 'final-form';
import holdMutators from 'final-form-hold';

// Create Form
const form = createForm({
  mutators: { ...arrayMutators },
  onSubmit,
});

// hold
form.mutators.hold('customer');

// unhold 
form.mutators.unhold('customer');
```

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Mutators](#mutators)
  - [`form.mutators.hold(name: string) => undefined`](#formmutatorsholdname-string--undefined)
  - [`form.mutators.unhold(name: string) => undefined`](#formmutatorsunholdname-string--undefined)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Mutators

### `form.mutators.hold(name: string) => undefined`

Moves a value from fromState to special buffer.

### `form.mutators.unhold(name: string) => undefined`

Moves value from special buffer to formState.

