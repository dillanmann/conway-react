(this["webpackJsonpconway-react"]=this["webpackJsonpconway-react"]||[]).push([[0],{11:function(t,e,i){t.exports=i(25)},16:function(t,e,i){},17:function(t,e,i){},18:function(t,e,i){},25:function(t,e,i){"use strict";i.r(e);var n=i(0),a=i.n(n),r=i(8),l=i.n(r),s=(i(16),i(1)),u=i(2),h=i(4),o=i(10),c=i(9);i(17),i(18);var d=function(t){return a.a.createElement("div",{className:"tile-grid"},t.grid.map((function(e,i){return a.a.createElement("div",{className:"tile-row",key:"row-".concat(i)},e.map((function(e,n){return a.a.createElement("div",{className:"tile-column",key:n},a.a.createElement("div",{className:"tile tile-".concat(t.grid[i][n]?"alive":"dead"),onClick:function(){return t.tileClicked(i,n)}}))})))})))},g=i(3),m=i(5),v=function(){function t(e,i,n){Object(s.a)(this,t),this.gridUpdated=function(){return null},this.grid=this.initialiseGrid(e,i),this.gridUpdated=n,this.enableTileChanges=!0,m(this)}return Object(u.a)(t,[{key:"initialiseGrid",value:function(t,e){return Object(g.a)(Array(t)).map((function(){return Object(g.a)(Array(e)).map((function(){return!1}))}))}},{key:"resetGrid",value:function(t,e){var i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];this.grid=this.initialiseGrid(t,e),i&&this.gridUpdated(),this.enableTileChanges=!0}},{key:"flipTileState",value:function(t,e){this.enableTileChanges&&(this.grid[t][e]=!this.grid[t][e],this.gridUpdated())}},{key:"setEnableTileChanges",value:function(t){this.enableTileChanges=t,this.gridUpdated()}},{key:"replaceGridContent",value:function(t){this.grid=t,this.gridUpdated()}}]),t}(),f=i(5),p=function(){function t(){Object(s.a)(this,t),f(this)}return Object(u.a)(t,[{key:"simulateTick",value:function(t){for(var e=t.map((function(e,i){return Object(g.a)(t[i])})),i=0;i<e.length;++i)for(var n=0;n<e[i].length;++n){var a=this.getAliveNeighbours(t,i,n),r=this.calculateNextState(t[i][n],a);e[i][n]=r}return e}},{key:"getAliveNeighbours",value:function(t,e,i){var n=this,a=0,r=[-1,0,1],l=t.length,s=t[e].length;return r.forEach((function(u){(0===u?[-1,1]:r).forEach((function(r){n.isSafeIndex(e+r,i+u,l,s)&&t[e+r][i+u]&&(a+=1)}))})),a}},{key:"isSafeIndex",value:function(t,e,i,n){return t>=0&&t<i&&e>=0&&e<n}},{key:"calculateNextState",value:function(t,e){return t&&2===e||3===e}}]),t}(),k=i(5),b=function(t){Object(o.a)(i,t);var e=Object(c.a)(i);function i(t){var n;return Object(s.a)(this,i),(n=e.call(this,t)).state={width:20,height:20,simulationRunning:!1,tickIntervalMillis:500},n.widths=[10,20,30],n.heights=[10,20,30],n.simulationIntervalId=0,n.simulator=new p,n.gridHandler=new v(n.state.width,n.state.height,(function(){return n.setState(n.state)})),k(Object(h.a)(n)),n}return Object(u.a)(i,[{key:"heightChange",value:function(t){var e=parseInt(t.target.value);this.setState({height:e}),this.gridHandler.resetGrid(this.state.width,e,!1)}},{key:"widthChange",value:function(t){var e=parseInt(t.target.value);this.setState({width:e}),this.gridHandler.resetGrid(e,this.state.height,!1)}},{key:"tickIntervalChange",value:function(t){var e=this,i=t.target.value;this.setState({tickIntervalMillis:i},(function(){e.state.simulationRunning&&(e.stopSimulation(),e.startSimulation(i))}))}},{key:"toggleSimulationState",value:function(){this.state.simulationRunning?this.stopSimulation():this.startSimulation(this.state.tickIntervalMillis)}},{key:"startSimulation",value:function(t){var e=this;this.gridHandler.setEnableTileChanges(!1),this.setState({simulationRunning:!0});try{this.simulationIntervalId=setInterval((function(){var t=e.simulator.simulateTick(e.gridHandler.grid);e.gridHandler.replaceGridContent(t)}),t)}catch(i){console.log("something went wrong with the simulation")}}},{key:"stopSimulation",value:function(){this.gridHandler.setEnableTileChanges(!0),this.setState({simulationRunning:!1}),clearInterval(this.simulationIntervalId)}},{key:"render",value:function(){var t=this;return a.a.createElement("div",{className:"app"},a.a.createElement("div",{className:"input-container"},a.a.createElement("label",{htmlFor:"tickInterval"},"Tick Interval (ms)"),a.a.createElement("input",{name:"tickInterval",id:"tickInterval",type:"number",value:this.state.tickIntervalMillis,step:"100",max:"5000",min:"100",size:"4",onChange:this.tickIntervalChange}),a.a.createElement("label",{htmlFor:"width"},"Width"),a.a.createElement("select",{name:"width",id:"width",value:this.state.width,onChange:this.widthChange,disabled:this.state.simulationRunning},this.widths.map((function(t){return a.a.createElement("option",{value:t,key:t},t)}))),a.a.createElement("label",{htmlFor:"height"},"Height"),a.a.createElement("select",{name:"height",id:"height",value:this.state.height,onChange:this.heightChange,disabled:this.state.simulationRunning},this.widths.map((function(t){return a.a.createElement("option",{value:t,key:t},t)}))),a.a.createElement("input",{type:"button",value:this.state.simulationRunning?"Stop":"Simulate",onClick:this.toggleSimulationState}),a.a.createElement("input",{type:"button",value:"Reset",onClick:function(){return t.gridHandler.resetGrid(t.state.width,t.state.height)},disabled:this.state.simulationRunning})),a.a.createElement(d,{grid:this.gridHandler.grid,tileClicked:this.gridHandler.flipTileState}))}}]),i}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.171be946.chunk.js.map