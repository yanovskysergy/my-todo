import React from "react";
import { Breadcrumbs, Link, Toolbar } from "@material-ui/core";
import makeStyles from "@material-ui/styles/makeStyles";

const fakeBreadcrumbs = [
  {
    name: "Todos",
    href: "#",
    onClick: () => console.log("Todos"),
  },
  {
    name: "To do something",
    href: "#",
    onClick: () => console.log("Todos"),
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
  const classes = useStyles();

  return (
    <Breadcrumbs
      className={classes.breadcrumbs}
      separator="›"
      aria-label="breadcrumb"
    >
      {fakeBreadcrumbs.map((breadcrumbs) => (
        <Link color="inherit" href={breadcrumbs.href}>
          {breadcrumbs.name}
        </Link>
      ))}
    </Breadcrumbs>
  );
};
