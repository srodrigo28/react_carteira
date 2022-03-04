import React  from "react";
import { Grid, } from './styles';
import HeaderMain from "../HeaderMain";
import Aside from "../Aside";
import Content from "../Content";

const Layout: React.FC = () => {
    return (
        <Grid>
            {/* <h1>Layout</h1> */}
            <HeaderMain/>
            <Aside/>
            <Content/>
        </Grid>
    );
}

export default Layout;