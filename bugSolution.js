```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct usage: Only runs once after the initial render
    console.log('useEffect called once');
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```