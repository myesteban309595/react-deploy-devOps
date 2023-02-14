import { Collapse } from "@material-ui/core";

const ModuleStyles = {

    button: {
      color: "white",
      backgroundColor: "#002c55d1",
      "&:hover, &:focus": { backgroundColor: "#002c55d1" },
      marginRight: "15px",
    },
    table: {
        backgroundColor: "white",
        borderCollapse: "collapse",
        textAlign: "left",
        width: "100%"
    },
    th: {
        padding: "10px",
        marginLeft: "40px"
    }
    ,
    td: {
        padding: "10px",
        marginLeft: "40px"
    },
    thead: {
        backgroundColor: "#388e3c",
        borderBottom: "solid 3px #0F362D",
        color: "#eeeeee",
        position: "sticky",
        top: "0px"
    },
  }

export default ModuleStyles;