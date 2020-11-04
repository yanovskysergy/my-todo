import React from "react";
import { Breadcrumbs, Link } from "@material-ui/core";
import makeStyles from "@material-ui/styles/makeStyles";

interface IBreadcrumb {
  name: string;
  href: string;
  onClick: () => void;
}

const fakeBreadcrumbs = [
  {
    name: "Todos",
    href: "#",
    onClick: () => console.log("Todos"),
  },
  {
    name: "To do something",
    href: "#",
    onClick: () => console.log("To do something"),
  },
];

const useStyles = makeStyles(() => ({
  breadcrumbs: {
    flexGrow: 1,
    marginLeft: 20,
    color: "white",
  },
}));

export default () => {
  const style = useStyles();

  return (
    <Breadcrumbs
      className={style["breadcrumbs"]}
      separator="›"
      aria-label="breadcrumb"
    >
      {fakeBreadcrumbs.map((breadcrumb: IBreadcrumb, index: number) => (
        <Link key={index} color="inherit" href={breadcrumb.href}>
          {breadcrumb.name}
        </Link>
      ))}
    </Breadcrumbs>
  );
};
