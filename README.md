# modal-project

# Vue 3 Learning Documentation

This document summarizes key concepts learned while working with Vue 3, including the use of the Vue CLI, Vue components, and various features.

## Table of Contents

1. [Why Use the Vue CLI?](#why-use-the-vue-cli)
2. [Using the Vue CLI](#using-the-vue-cli)
3. [New Project Walkthrough](#new-project-walkthrough)
4. [Vue Files & Templates](#vue-files--templates)
5. [Template Refs](#template-refs)
6. [Multiple Components](#multiple-components)
7. [Scoped & Global CSS](#scoped--global-css)
8. [Props](#props)
9. [Emitting Custom Events](#emitting-custom-events)
10. [Click Event Modifiers](#click-event-modifiers)
11. [Slots](#slots)
12. [Challenge: Creating Another Modal](#challenge-creating-another-modal)
13. [Using Teleport](#using-teleport)

## Why Use the Vue CLI?

The Vue CLI provides a powerful tool for scaffolding and managing Vue.js applications. It simplifies the setup process, allowing developers to focus on building features rather than dealing with configuration.

## Using the Vue CLI

The Vue CLI offers various commands and options to create, manage, and build Vue projects. It facilitates a streamlined development experience with built-in tools for testing and deployment.

## New Project Walkthrough

Upon creating a new project with the Vue CLI, you will go through a guided setup process that allows you to choose configurations such as routing and state management.

## Vue Files & Templates

Vue single-file components (SFCs) consist of three sections: template, script, and style. This structure promotes modularity and organization in your Vue applications.

## Template Refs

Template refs allow you to directly access DOM elements or child components in your Vue instance. This is useful for manipulating elements after the component is mounted.

## Multiple Components

Vue allows you to break your application into multiple components, promoting reusability and maintainability. Each component can manage its own state and lifecycle.

## Scoped & Global CSS

- **Scoped CSS**: Styles defined in a component are scoped to that component only, preventing conflicts with other components.
- **Global CSS**: Styles applied globally affect all components and should be used judiciously.

## Props

Props are custom attributes used to pass data from a parent component to a child component. They enable components to be dynamic and reusable.

## Emitting Custom Events

Child components can communicate with parent components by emitting custom events. This pattern allows for a clear flow of data and events within your application.

## Click Event Modifiers

Vue provides various event modifiers for handling events more efficiently. These modifiers can simplify event handling logic, making your code cleaner.

## Slots

Slots offer a way to create reusable components that can accept content from their parent components. This enables a flexible and dynamic approach to component design.

## Challenge: Creating Another Modal

This challenge involves creating an additional modal component, reinforcing the understanding of component structure, props, and events.

## Using Teleport

Teleport allows rendering a component in a different part of the DOM than its parent. This is particularly useful for modals and tooltips that need to be displayed outside of their parent context.

---

Feel free to expand on each section as you continue to learn and experiment with Vue 3!


















## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).





