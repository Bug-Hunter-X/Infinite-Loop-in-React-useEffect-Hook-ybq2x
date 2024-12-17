# React useEffect Infinite Loop Bug

This repository demonstrates a common bug in React applications involving the `useEffect` hook.  The bug arises from incorrectly using the `useEffect` hook without specifying dependencies, leading to an infinite loop.

## Bug Description

The `MyComponent` function uses the `useEffect` hook to increment a state variable `count`. Because no dependency array is provided, the `useEffect` hook runs repeatedly, causing the `count` to increment infinitely.  This results in a performance issue and potentially a crash.

## Solution

The solution involves correctly specifying the dependency array in the `useEffect` hook.  In this case, an empty dependency array `[]` means the effect runs only once after the initial render. If the component should re-render when some specific values update, include the values in the dependency array.