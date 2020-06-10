import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { HashRouter , Switch, Route} from 'react-router-dom'
import {LoginPage} from "./pages/login/index"
//细节  
//引入material-ui 谷歌推出的组件库
import {createMuiTheme,MuiThemeProvider} from "@material-ui/core/styles";
import "./i18n";
//Provider 不是redux独有的功能
// 国际化 i18n插件
// 技术不一样 material-ui 不同民族，定制风格
const theme = createMuiTheme({ //风格化 
    typography: {
      useNextVariants: true
    }
  })
  
  
  ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <HashRouter>
            <Switch>
                <Route exact={true} path="/" component={LoginPage}>

                </Route>
            </Switch>
        </HashRouter> 
  
    </MuiThemeProvider>
    ,document.getElementById('root') 
  )