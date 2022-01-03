export const Navbar = ({ count }: { count: number }) => {
  const changeThemeApp = () => {
    document.body.classList.toggle('dark-theme');
  };
  return (
    <header>
      <h1>Shopping Cart</h1>
      <p>Products {count}</p>
      <button onClick={() => changeThemeApp()}>Dar Mode</button>
    </header>
  );
};
