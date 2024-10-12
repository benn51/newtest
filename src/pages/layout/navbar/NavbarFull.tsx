import { Button, Flex } from "@chakra-ui/react";
import PopoverComoponent from "../PopoverComoponent";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavbarFull = () => {
  const [homeIsActive, setHomeIsActive] = useState(false);
  const [dashboardIsActive, setDashboardIsActive] = useState(false);
  const [blogsIsActive, setBlogsIsActive] = useState(false);
  const [loginIsActive, setLoginIsActive] = useState(false);
  const [changeProfileActive, setChangeProfileActive] = useState(false);

  const manageActive = (e: any) => {
    let current: string = e.target.innerText;
    if (current == "Home") {
      setHomeIsActive(true);
      setDashboardIsActive(false);
      setBlogsIsActive(false);
      setLoginIsActive(false);
      setChangeProfileActive(!changeProfileActive);
    } else if (current == "Dashboard") {
      setHomeIsActive(false);
      setDashboardIsActive(true);
      setBlogsIsActive(false);
      setLoginIsActive(false);
      setChangeProfileActive(!changeProfileActive);
    } else if (current == "Leave Comment") {
      setHomeIsActive(false);
      setDashboardIsActive(false);
      setBlogsIsActive(true);
      setLoginIsActive(false);
      setChangeProfileActive(!changeProfileActive);
    } else if (current == "Login") {
      setHomeIsActive(false);
      setDashboardIsActive(false);
      setBlogsIsActive(false);
      setLoginIsActive(true);
      setChangeProfileActive(!changeProfileActive);
    }
  };
  // const manageActive = (e: any) => {
  //   const current = e.target.innerText;
  //   const stateMap = {
  //     Home: { home: true, dashboard: false, blogs: false, login: false },
  //     Dashboard: { home: false, dashboard: true, blogs: false, login: false },
  //     comment: { home: false, dashboard: false, blogs: true, login: false },
  //     Login: { home: false, dashboard: false, blogs: false, login: true },
  //   };

  //   const activeState = stateMap[current] || {};

  //   setHomeIsActive(activeState.home || false);
  //   setDashboardIsActive(activeState.dashboard || false);
  //   setBlogsIsActive(activeState.comment || false);
  //   setLoginIsActive(activeState.login || false);
  //   setChangeProfileActive(!changeProfileActive);
  // };
  const resetActive = () => {
    setHomeIsActive(false);
    setDashboardIsActive(false);
    setBlogsIsActive(false);
    setLoginIsActive(false);
  };
  return (
    <Flex
      direction={"row"}
      justify={"end"}
      gap={"1%"}
      h={"10vh"}
      bg={"gray.100"}
      align={"center"}
      w={"100%"}
      p={5}
    >
      {/* {menuItems.map((item: any) => (
        <Button
          key={item.id}
          width={"130px"}
          variant={"link"}
          colorScheme={"blue"}
          isActive={item.acive}
          onClick={(e) => {
            manageActive(e, item.name);
          }}
        >
          {" "}
          <Link to={item.link}> {item.name}</Link>
        </Button>
      ))} */}
      <Button
        width={"90px"}
        colorScheme={homeIsActive ? "orange" : "blue"}
        variant={"link"}
        isActive={homeIsActive}
        onClick={manageActive}
      >
        <Link to={"/home"}> Home</Link>
      </Button>
      <Button
        width={"130px"}
        colorScheme={blogsIsActive ? "orange" : "blue"}
        variant={"link"}
        isActive={blogsIsActive}
        onClick={manageActive}
      >
        <Link to={"/blogs"}> Leave Comment</Link>
      </Button>
      <Button
        width={"130px"}
        colorScheme={dashboardIsActive ? "orange" : "blue"}
        variant={"link"}
        isActive={dashboardIsActive}
        onClick={manageActive}
      >
        <Link to={"/dashboard"}> Dashboard</Link>
      </Button>
      <Button
        width={"50px"}
        colorScheme={loginIsActive ? "orange" : "blue"}
        variant={"link"}
        isActive={loginIsActive}
        onClick={manageActive}
      >
        <Link to={"/login"}> Login</Link>
      </Button>
      <PopoverComoponent
        linkTo="profile"
        linkPage="Profile"
        linkName="profile"
        changeActive={changeProfileActive}
        resetActive={resetActive}
      />{" "}
    </Flex>
  );
};

export default NavbarFull;
