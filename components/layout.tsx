import AppHead from "@/components/app-head";
import Nav from "@/components/nav";

function Layout({ user, loading = false, children }) {
  return (
    <>
      <AppHead user={user} loading={loading}></AppHead>
      <Nav
        user={user}
        loading={loading}
        containerClass="container-fluid"
        navClassList="navbar-light bg-white"
      ></Nav>
      <main>{children}</main>
    </>
  );
}

export default Layout;
