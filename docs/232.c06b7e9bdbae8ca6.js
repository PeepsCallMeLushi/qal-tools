"use strict";(self.webpackChunkmtg_collection_tool=self.webpackChunkmtg_collection_tool||[]).push([[232],{232:(A,p,r)=>{r.r(p),r.d(p,{LeagueModule:()=>v});var m=r(6895),y=r(2613),f=r(3060),l=r(4006),e=r(4650),u=r(4859),h=r(7392),c=r(9549),g=r(4144);function N(n,o){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",3)(2,"mat-form-field",4),e._UZ(3,"input",5),e.qZA()(),e.TgZ(4,"div",6)(5,"button",7),e.NdJ("click",function(){const s=e.CHM(t).index,d=e.oxw();return e.KtG(d.editPlayer(s))}),e.TgZ(6,"mat-icon"),e._uU(7),e.qZA()(),e.TgZ(8,"button",8),e.NdJ("click",function(){const s=e.CHM(t).index,d=e.oxw();return e.KtG(d.deletePlayer(s))}),e.TgZ(9,"mat-icon"),e._uU(10,"delete"),e.qZA()()(),e.BQk()}if(2&n){const t=o.$implicit;e.xp6(3),e.Q6J("placeholder","Type the player name here")("maxLength",16)("minLength",3)("formControl",t.get("playerName")),e.xp6(4),e.Oqu(t.get("edit").value?"save":"edit")}}function x(n,o){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",3)(2,"mat-form-field",4)(3,"mat-label"),e._uU(4,"Player Name"),e.qZA(),e._UZ(5,"input",5),e.qZA()(),e.TgZ(6,"div",6)(7,"button",9),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.addPlayer())}),e.TgZ(8,"mat-icon"),e._uU(9,"add"),e.qZA()()(),e.BQk()}if(2&n){const t=e.oxw();e.xp6(5),e.Q6J("placeholder","Type the player name here")("maxLength",16)("minLength",3)("formControl",t.playerNameInput)}}let L=(()=>{class n{constructor(){this.playerNameInput=new l.NI(null,[l.kI.maxLength(16),l.kI.minLength(3)]),this.playerList=[],this.added=new e.vpe}ngOnInit(){}addPlayer(){const t=this.playerNameInput.value;this.playerNameInput.valid&&class T{static isNotNullNotEmptyNotUndefinedNotZero(o){return this.isNotEmpty(o)&&this.isNotEmpty(o)&&this.isNotZero(o)}static isNotNull(o){return null!==o}static isNotEmpty(o){return this.isNotNull(o)&&""!==o}static isNotZero(o){return this.isNotNull(o)&&0!=+o}static isNotUndefined(o){return this.isNotNull(o)&&void 0!==o}}.isNotNullNotEmptyNotUndefinedNotZero(t)&&(this.added.emit(t),this.playerNameInput.setValue(null),this.playerNameInput.updateValueAndValidity())}deletePlayer(t){this.playerList.splice(t,1)}editPlayer(t){const a=this.playerList[t],i=a.get("edit");i&&(i.value?a.disable():a.enable(),i.setValue(!i.value))}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["player-list"]],inputs:{playerList:"playerList"},outputs:{added:"added"},decls:5,vars:3,consts:[[1,"row"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"col-8","col-md-4"],["appearance","outline",1,"width-100"],["matInput","","type","text",3,"placeholder","maxLength","minLength","formControl"],[1,"col-4","col-md-2","align-right"],["mat-icon-button","","type","button","color","accent",1,"margin-right-16",3,"click"],["mat-icon-button","","type","button","color","warn",3,"click"],["mat-icon-button","","type","button","color","accent",3,"click"]],template:function(t,a){1&t&&(e.TgZ(0,"div"),e._uU(1),e.qZA(),e.TgZ(2,"div",0),e.YNc(3,N,11,5,"ng-container",1),e.YNc(4,x,10,4,"ng-container",2),e.qZA()),2&t&&(e.xp6(1),e.hij(" Player Count: ",a.playerList.length," / 10\n"),e.xp6(2),e.Q6J("ngForOf",a.playerList),e.xp6(1),e.Q6J("ngIf",a.playerList.length<10))},dependencies:[m.sg,m.O5,l.Fj,l.JJ,l.oH,u.lW,c.KE,c.hX,h.Hw,g.Nt]}),n})();function Z(n,o){if(1&n&&(e.TgZ(0,"mat-form-field",4),e._UZ(1,"input",5),e.qZA()),2&n){const t=o.$implicit;e.xp6(1),e.Q6J("placeholder","Type the player name here")("maxLength",16)("minLength",3)("formControl",t.get("playerName"))}}function C(n,o){if(1&n&&(e.TgZ(0,"mat-form-field",6),e._UZ(1,"input",5),e.qZA()),2&n){const t=o.$implicit;e.xp6(1),e.Q6J("placeholder","Type the player name here")("maxLength",16)("minLength",3)("formControl",t.get("playerName"))}}let P=(()=>{class n{constructor(){this.blueTeam=[],this.redTeam=[]}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["team-list"]],inputs:{blueTeam:"blueTeam",redTeam:"redTeam"},decls:9,vars:2,consts:[[1,"row"],[1,"col-12","col-md-6"],["appearance","outline","class","width-100 blue-player",4,"ngFor","ngForOf"],["appearance","outline","class","width-100 red-player",4,"ngFor","ngForOf"],["appearance","outline",1,"width-100","blue-player"],["matInput","","type","text",3,"placeholder","maxLength","minLength","formControl"],["appearance","outline",1,"width-100","red-player"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h2"),e._uU(3,"Blue Team"),e.qZA(),e.YNc(4,Z,2,4,"mat-form-field",2),e.qZA(),e.TgZ(5,"div",1)(6,"h2"),e._uU(7,"Red Team"),e.qZA(),e.YNc(8,C,2,4,"mat-form-field",3),e.qZA()()),2&t&&(e.xp6(4),e.Q6J("ngForOf",a.blueTeam),e.xp6(4),e.Q6J("ngForOf",a.redTeam))},dependencies:[m.sg,l.Fj,l.JJ,l.oH,c.KE,g.Nt]}),n})();function b(n,o){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",2)(2,"button",3),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.clearRandomize())}),e._uU(3,"Clear"),e.TgZ(4,"mat-icon"),e._uU(5,"delete"),e.qZA()(),e.TgZ(6,"button",3),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.randomizeAgain())}),e._uU(7,"Randomize Again"),e.TgZ(8,"mat-icon"),e._uU(9,"replay"),e.qZA()()(),e.TgZ(10,"div",4),e._UZ(11,"team-list",5),e.qZA(),e.BQk()}if(2&n){const t=e.oxw();e.xp6(11),e.Q6J("blueTeam",t.blueTeam)("redTeam",t.redTeam)}}function z(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div",2)(1,"button",6),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.randomize())}),e._uU(2,"Randomize Teams"),e.TgZ(3,"mat-icon"),e._uU(4,"shuffle"),e.qZA()()(),e.TgZ(5,"div",4)(6,"player-list",7),e.NdJ("added",function(i){e.CHM(t);const s=e.oxw();return e.KtG(s.addPlayer(i))}),e.qZA()()}if(2&n){const t=e.oxw();e.xp6(1),e.Q6J("disabled",t.playerList.length<3),e.xp6(5),e.Q6J("playerList",t.playerList)}}const I=[{path:"",pathMatch:"full",redirectTo:"player-randomizer"},{path:"player-team-randomizer",component:(()=>{class n{constructor(){this.playerList=[],this.blueTeam=[],this.redTeam=[],this.randomized=!1}ngOnInit(){}addPlayer(t){const a=new l.cw({playerName:new l.NI(t,[l.kI.required,l.kI.minLength(3),l.kI.maxLength(16)]),role:new l.NI(null),edit:new l.NI(!1)});a.disable(),this.playerList.push(a)}randomize(){if(this.playerList.length>=3&&this.playerList.length<=10){const t=class _{static shuffle(o){let a,t=o.length;for(;0!=t;)a=Math.floor(Math.random()*t),t--,[o[t],o[a]]=[o[a],o[t]];return o}}.shuffle(this.playerList.slice());t.forEach((a,i)=>{console.log(Math.floor(t.length/2)),i+1<=Math.floor(t.length/2)?this.blueTeam.push(a):this.redTeam.push(a)}),this.randomized=!0}}clearRandomize(){this.blueTeam.splice(0,this.blueTeam.length),this.redTeam.splice(0,this.redTeam.length),this.randomized=!1}randomizeAgain(){this.clearRandomize(),this.randomize()}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["player-randomizer"]],decls:5,vars:2,consts:[[4,"ngIf","ngIfElse"],["playerListInput",""],[1,"align-right","margin-top-16"],["mat-stroked-button","","type","button","color","accent",1,"margin-right-16",3,"click"],[1,"margin-top-16"],[3,"blueTeam","redTeam"],["mat-stroked-button","","type","button","color","accent",1,"margin-right-16",3,"disabled","click"],[3,"playerList","added"]],template:function(t,a){if(1&t&&(e.TgZ(0,"h1"),e._uU(1,"Player Team Randomizer"),e.qZA(),e.YNc(2,b,12,2,"ng-container",0),e.YNc(3,z,7,2,"ng-template",null,1,e.W1O)),2&t){const i=e.MAs(4);e.xp6(2),e.Q6J("ngIf",a.randomized)("ngIfElse",i)}},dependencies:[m.O5,u.lW,h.Hw,L,P]}),n})()}];let v=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[m.ez,y.m,f.Bz.forChild(I)]}),n})()}}]);