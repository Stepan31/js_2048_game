!function(){var t={};function e(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function n(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return r(t,void 0);var n=Object.prototype.toString.call(t).slice(8,-1);if("Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,void 0)}}(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var a=function(){var t;function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.defaultInitialState;!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,e),this.board=t.map(function(t){return n(t)}),this.score=0,this.status=e.GameStatus.idle,this.initialState=t.map(function(t){return n(t)})}return t=[{key:"getState",value:function(){return this.board}},{key:"getScore",value:function(){return this.score}},{key:"getStatus",value:function(){return this.status}},{key:"start",value:function(){this.status=e.GameStatus.playing,this.newCell(),this.newCell()}},{key:"restart",value:function(){this.status=e.GameStatus.idle,this.score=0,this.board=this.initialState.map(function(t){return n(t)})}},{key:"newCell",value:function(){for(var t=[],e=0;e<4;e++)for(var r=0;r<4;r++)this.board[e][r]||t.push({y:e,x:r});if(t.length>0){var n=Math.floor(Math.random()*t.length);this.board[t[n].y][t[n].x]=.9>Math.random()?2:4}}},{key:"checkGameState",value:function(){this.board.find(function(t){return t.find(function(t){return 2048===t})})?this.status=e.GameStatus.win:this.checkIfLose()&&(this.status=e.GameStatus.lose)}},{key:"checkIfLose",value:function(){if(this.board.find(function(t){return t.includes(0)}))return!1;for(var t=0;t<4;t++)for(var e=0;e<4;e++)if(t<3&&this.board[t][e]===this.board[t+1][e]||e<3&&this.board[t][e]===this.board[t][e+1])return!1;return!0}},{key:"move",value:function(t){var e=this;if("playing"!==this.status)return!1;var r=!1,n=Array.from({length:4},function(){return[!1,!1,!1,!1]}),a=function(t){for(var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=0;r<4;r++)for(var n=0;n<4;n++)t(e?3-r:r,e?3-n:n)},i=function(t,a,i,o){if(0!==e.board[t][a]){for(var s=t,u=a;s+i>=0&&s+i<4&&u+o>=0&&u+o<4&&0===e.board[s+i][u+o];)s+=i,u+=o;s+i>=0&&s+i<4&&u+o>=0&&u+o<4&&e.board[s+i][u+o]===e.board[t][a]&&!n[s+i][u+o]?(e.board[s+i][u+o]*=2,e.score+=e.board[s+i][u+o],e.board[t][a]=0,n[s+i][u+o]=!0,r=!0):(s!==t||u!==a)&&(e.board[s][u]=e.board[t][a],e.board[t][a]=0,r=!0)}};return"up"===t?a(function(t,e){return i(t,e,-1,0)}):"down"===t?a(function(t,e){return i(3-t,e,1,0)}):"left"===t?a(function(t,e){return i(t,e,0,-1)}):"right"===t&&a(function(t,e){return i(t,3-e,0,1)}),r&&(this.newCell(),this.checkGameState()),r}},{key:"moveUp",value:function(){return this.move("up")}},{key:"moveDown",value:function(){return this.move("down")}},{key:"moveLeft",value:function(){return this.move("left")}},{key:"moveRight",value:function(){return this.move("right")}}],function(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}(e.prototype,t),e}();e(a,"defaultInitialState",[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]),e(a,"GameStatus",{idle:"idle",playing:"playing",win:"win",lose:"lose"});var i=new(t=a),o=document.querySelector(".button"),s=document.querySelector(".game-score"),u=document.querySelectorAll("tr"),l=document.querySelector(".message-start"),c=document.querySelector(".message-lose"),f=document.querySelector(".message-win");function d(){s.textContent=i.getScore();for(var t=i.getState(),e=0;e<4;e++)for(var r=0;r<4;r++){var n=u[e].cells[r];if(0===t[e][r])n.firstChild&&n.removeChild(n.firstChild);else if(!n.firstChild||n.firstChild.textContent!==t[e][r]){n.innerHTML="";var a=document.createElement("div");a.className="field-cell-num field-cell--".concat(t[e][r]),a.textContent=t[e][r],n.appendChild(a)}}}o.addEventListener("click",function(){i.getStatus()===t.GameStatus.idle?(o.textContent="Restart",o.classList.add("restart"),o.classList.remove("start"),l.classList.add("hidden"),i.start()):(o.textContent="Start",o.classList.add("start"),o.classList.remove("restart"),f.classList.add("hidden"),c.classList.add("hidden"),l.classList.remove("hidden"),i.restart()),d()}),document.addEventListener("keydown",function(e){var r=!1;if("playing"===i.getStatus()){switch(e.key){case"ArrowUp":r=i.moveUp();break;case"ArrowDown":r=i.moveDown();break;case"ArrowLeft":r=i.moveLeft();break;case"ArrowRight":r=i.moveRight()}r&&setTimeout(function(){var e;d(),(e=i.getStatus())===t.GameStatus.win?f.classList.remove("hidden"):e===t.GameStatus.lose&&c.classList.remove("hidden")},100)}})}();
//# sourceMappingURL=index.c522b982.js.map
