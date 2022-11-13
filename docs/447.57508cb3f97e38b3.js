"use strict";(self.webpackChunkmtg_collection_tool=self.webpackChunkmtg_collection_tool||[]).push([[447],{8447:(st,d,i)=>{i.r(d),i.d(d,{MtgToolModule:()=>lt});var c=i(6895),p=i(1005),t=i(4650),f=i(529);let g=(()=>{class e{constructor(o){this.http=o,this.scryFallApi="https://api.scryfall.com"}createSetList(o){const n=[];return o.forEach(l=>{n.push({set_abreviation:l.code,set_name:l.name})}),n.sort((l,s)=>l.set_name>s.set_name?1:-1)}getSet(o){return this.http.get(`${this.scryFallApi}/sets/${o||""}`)}getCardListFromSet(o){return this.http.get(o||"")}requestSetList(){return this.http.get(`${this.scryFallApi}/sets`)}getSetList(){return[]}}return e.\u0275fac=function(o){return new(o||e)(t.LFG(f.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var T=i(7089),C=i(5412);let b=(()=>{class e{constructor(o){this.dialog=o}openLoadingDialog(){return this.dialog.open(T.b,{width:"25%",height:"25%",disableClose:!0})}closeLoadingDialog(o){o.close()}}return e.\u0275fac=function(o){return new(o||e)(t.LFG(C.uw))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var r=i(5717);function x(e,a){1&e&&(t.TgZ(0,"th",18),t._uU(1," Count "),t.qZA())}function Z(e,a){if(1&e&&(t.TgZ(0,"td",19),t._uU(1),t.qZA()),2&e){const o=a.$implicit;t.xp6(1),t.hij(" ",o.count," ")}}function L(e,a){1&e&&(t.TgZ(0,"th",18),t._uU(1," Tradelist Count "),t.qZA())}function F(e,a){if(1&e&&(t.TgZ(0,"td",19),t._uU(1),t.qZA()),2&e){const o=a.$implicit;t.xp6(1),t.hij(" ",o.tradelist_count," ")}}function S(e,a){1&e&&(t.TgZ(0,"th",18),t._uU(1," Edition "),t.qZA())}function v(e,a){if(1&e&&(t.TgZ(0,"td",19),t._uU(1),t.qZA()),2&e){const o=a.$implicit;t.xp6(1),t.hij(" ",o.edition," ")}}function A(e,a){1&e&&(t.TgZ(0,"th",18),t._uU(1," Condition "),t.qZA())}function y(e,a){if(1&e&&(t.TgZ(0,"td",19),t._uU(1),t.qZA()),2&e){const o=a.$implicit;t.xp6(1),t.hij(" ",o.condition," ")}}function N(e,a){1&e&&(t.TgZ(0,"th",18),t._uU(1," Language "),t.qZA())}function I(e,a){if(1&e&&(t.TgZ(0,"td",19),t._uU(1),t.qZA()),2&e){const o=a.$implicit;t.xp6(1),t.hij(" ",o.language," ")}}function Y(e,a){1&e&&(t.TgZ(0,"th",18),t._uU(1," Foil "),t.qZA())}function U(e,a){if(1&e&&(t.TgZ(0,"td",19),t._uU(1),t.qZA()),2&e){const o=a.$implicit;t.xp6(1),t.hij(" ",o.foil," ")}}function D(e,a){1&e&&(t.TgZ(0,"th",18),t._uU(1," Tags "),t.qZA())}function Q(e,a){if(1&e&&(t.TgZ(0,"td",19),t._uU(1),t.qZA()),2&e){const o=a.$implicit;t.xp6(1),t.hij(" ",o.tags," ")}}function M(e,a){1&e&&(t.TgZ(0,"th",18),t._uU(1," Last Modified "),t.qZA())}function w(e,a){if(1&e&&(t.TgZ(0,"td",19),t._uU(1),t.qZA()),2&e){const o=a.$implicit;t.xp6(1),t.hij(" ",o.last_modified," ")}}function J(e,a){1&e&&(t.TgZ(0,"th",18),t._uU(1," Collector Number "),t.qZA())}function q(e,a){if(1&e&&(t.TgZ(0,"td",19),t._uU(1),t.qZA()),2&e){const o=a.$implicit;t.xp6(1),t.hij(" ",o.collector_number," ")}}function E(e,a){1&e&&(t.TgZ(0,"th",18),t._uU(1," Name "),t.qZA())}function R(e,a){if(1&e&&(t.TgZ(0,"td",19),t._uU(1),t.qZA()),2&e){const o=a.$implicit;t.xp6(1),t.hij(" ",o.name," ")}}function O(e,a){1&e&&t._UZ(0,"tr",20)}function j(e,a){1&e&&t._UZ(0,"tr",21)}function z(e,a){if(1&e&&(t.TgZ(0,"table",3),t.ynx(1,4),t.YNc(2,x,2,0,"th",5),t.YNc(3,Z,2,1,"td",6),t.BQk(),t.ynx(4,7),t.YNc(5,L,2,0,"th",5),t.YNc(6,F,2,1,"td",6),t.BQk(),t.ynx(7,8),t.YNc(8,S,2,0,"th",5),t.YNc(9,v,2,1,"td",6),t.BQk(),t.ynx(10,9),t.YNc(11,A,2,0,"th",5),t.YNc(12,y,2,1,"td",6),t.BQk(),t.ynx(13,10),t.YNc(14,N,2,0,"th",5),t.YNc(15,I,2,1,"td",6),t.BQk(),t.ynx(16,11),t.YNc(17,Y,2,0,"th",5),t.YNc(18,U,2,1,"td",6),t.BQk(),t.ynx(19,12),t.YNc(20,D,2,0,"th",5),t.YNc(21,Q,2,1,"td",6),t.BQk(),t.ynx(22,13),t.YNc(23,M,2,0,"th",5),t.YNc(24,w,2,1,"td",6),t.BQk(),t.ynx(25,14),t.YNc(26,J,2,0,"th",5),t.YNc(27,q,2,1,"td",6),t.BQk(),t.ynx(28,15),t.YNc(29,E,2,0,"th",5),t.YNc(30,R,2,1,"td",6),t.BQk(),t.YNc(31,O,1,0,"tr",16),t.YNc(32,j,1,0,"tr",17),t.qZA()),2&e){const o=t.oxw();t.Q6J("dataSource",o.cardListForTable),t.xp6(31),t.Q6J("matHeaderRowDef",o.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",o.displayedColumns)}}let B=(()=>{class e{constructor(){this.displayedColumns=["count","tradelist_count","name","edition","condition","language","foil","tags","last_modified","collector_number"],this.cardListForTable=[]}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["card-table"]],inputs:{cardListForTable:"cardListForTable"},decls:3,vars:1,consts:[[1,"row"],[1,"col-12"],["mat-table","","class","width-100 mat-elevation-z8",3,"dataSource",4,"ngIf"],["mat-table","",1,"width-100","mat-elevation-z8",3,"dataSource"],["matColumnDef","count"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","tradelist_count"],["matColumnDef","edition"],["matColumnDef","condition"],["matColumnDef","language"],["matColumnDef","foil"],["matColumnDef","tags"],["matColumnDef","last_modified"],["matColumnDef","collector_number"],["matColumnDef","name"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(o,n){1&o&&(t.TgZ(0,"div",0)(1,"div",1),t.YNc(2,z,33,3,"table",2),t.qZA()()),2&o&&(t.xp6(2),t.Q6J("ngIf",n.cardListForTable.length>0))},dependencies:[c.O5,r.BZ,r.fO,r.as,r.w1,r.Dz,r.nj,r.ge,r.ev,r.XQ,r.Gk]}),e})();var m=i(4006),$=i(8675),X=i(4004),u=i(7957),P=i(3238),h=i(9549),k=i(4144);function G(e,a){if(1&e&&(t.TgZ(0,"mat-option",7),t._uU(1),t.qZA()),2&e){const o=a.$implicit;t.Q6J("value",o.set_name),t.xp6(1),t.hij(" ",o.set_name," ")}}let H=(()=>{class e{constructor(){this.searchFormControl=new m.NI(""),this.setList=[],this.searchResults=new t.vpe,this.filterList=this.searchFormControl.valueChanges.pipe((0,$.O)(""),(0,X.U)(o=>this.filterOptions(o||"")))}ngOnInit(){}emitOptionSelected(o){this.searchResults.emit(o)}filterOptions(o){return this.setList.filter(n=>n.set_name.toLowerCase().includes(o.toLowerCase())||n.set_abreviation.toLowerCase().includes(o.toLowerCase()))}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["set-search-input"]],inputs:{setList:"setList"},outputs:{searchResults:"searchResults"},decls:10,vars:5,consts:[[1,"row"],[1,"col-12"],["appearance","fill",1,"width-100","set-autocomplete-input"],["matInput","","type","text","placeholder","Start typing a set name or code","aria-label","Set",3,"formControl","matAutocomplete"],["autoActiveFirstOption","",3,"optionSelected"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(o,n){if(1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"mat-form-field",2)(3,"mat-label"),t._uU(4,"Set"),t.qZA(),t._UZ(5,"input",3),t.TgZ(6,"mat-autocomplete",4,5),t.NdJ("optionSelected",function(s){return n.emitOptionSelected(s.option.value)}),t.YNc(8,G,2,2,"mat-option",6),t.ALo(9,"async"),t.qZA()()()()),2&o){const l=t.MAs(7);t.xp6(5),t.Q6J("formControl",n.searchFormControl)("matAutocomplete",l),t.xp6(3),t.Q6J("ngForOf",t.lcZ(9,3,n.filterList))}},dependencies:[c.sg,m.Fj,m.JJ,m.oH,u.XC,u.ZL,P.ey,h.KE,h.hX,k.Nt,c.Ov]}),e})();var K=i(6709),_=i(3848);function W(e,a){if(1&e){const o=t.EpF();t.TgZ(0,"mat-checkbox",3),t.NdJ("change",function(l){t.CHM(o);const s=t.oxw();return t.KtG(s.showExtras=l.checked)}),t._uU(1,"Show Extras"),t.qZA()}}function V(e,a){if(1&e&&(t.TgZ(0,"mat-tab",6),t._UZ(1,"card-table",7),t.qZA()),2&e){const o=t.oxw(2);t.xp6(1),t.Q6J("cardListForTable",o.cardListForTable)}}function tt(e,a){if(1&e&&(t.TgZ(0,"mat-tab",8),t._UZ(1,"card-table",7),t.qZA()),2&e){const o=t.oxw(2);t.xp6(1),t.Q6J("cardListForTable",o.cardExtrasForTable)}}function et(e,a){if(1&e&&(t.TgZ(0,"mat-tab-group"),t.YNc(1,V,2,1,"mat-tab",4),t.YNc(2,tt,2,1,"mat-tab",5),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.Q6J("ngIf",o.cardListForTable.length>0),t.xp6(1),t.Q6J("ngIf",o.cardListForTable.length>0&&o.showExtras||0===o.cardListForTable.length&&o.cardExtrasForTable.length>0)}}let ot=(()=>{class e{constructor(o,n){this.cardService=o,this.dialog=n,this.cardListForTable=[],this.cardExtrasForTable=[],this.setList=[],this.loading=!1,this.showExtras=!1,this.cardListFromRequest=[],this.processedCardList=[]}ngOnInit(){this.cardService.requestSetList().subscribe(o=>{this.setList=this.cardService.createSetList(o.data)})}selectSetCards(o){this.cleanArrays(),this.loading=!0,this.loadingDialog=this.dialog.openLoadingDialog(),this.setInTable=this.setList.find(n=>n.set_name===o),this.cardService.getSet(this.setInTable?.set_abreviation).pipe((0,p.g)(500)).subscribe(n=>{this.setInTable&&(this.setInTable.set_print_size=n.printed_size),this.loopCardPages(n.search_uri)})}dataCopy(){return JSON.stringify(this.cardListForTable)}cleanArrays(){this.cardListFromRequest=[],this.cardListForTable=[],this.processedCardList=[],this.cardExtrasForTable=[]}loopCardPages(o){this.cardService.getCardListFromSet(o).pipe((0,p.g)(500)).subscribe(n=>{if(this.cardListFromRequest=this.cardListFromRequest.concat(n.data),n.has_more)this.loopCardPages(n.next_page);else{this.handleSetPrintSize(),this.cardListFromRequest.filter(s=>{this.processedCardList.push({count:0,tradelist_count:0,name:s.name,edition:s.set,condition:"Near Mint",language:"English",foil:"",tags:"",last_modified:"00:00.0",collector_number:s.collector_number?s.collector_number:""})});const l=this.processedCardList.findIndex(s=>s.collector_number&&+s.collector_number===this.setInTable?.set_print_size);this.cardListForTable=this.processedCardList.slice(0,l+1),this.cardExtrasForTable=this.processedCardList.slice(l+1,this.processedCardList.length),this.loading=!1,this.dialog.closeLoadingDialog(this.loadingDialog)}})}handleSetPrintSize(){if(!this.setInTable?.set_print_size){const o=this.cardListFromRequest.filter(l=>"Forest"===l.name&&"Basic Land \u2014 Forest"===l.type_line),n=o[o.length-1];this.setInTable&&n&&(this.setInTable.set_print_size=+n.collector_number)}}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(g),t.Y36(b))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-mtg-tool"]],decls:3,vars:3,consts:[[3,"setList","searchResults"],[3,"change",4,"ngIf"],[4,"ngIf"],[3,"change"],["label","Set",4,"ngIf"],["label","Extras",4,"ngIf"],["label","Set"],[3,"cardListForTable"],["label","Extras"]],template:function(o,n){1&o&&(t.TgZ(0,"set-search-input",0),t.NdJ("searchResults",function(s){return n.selectSetCards(s)}),t.qZA(),t.YNc(1,W,2,0,"mat-checkbox",1),t.YNc(2,et,3,2,"mat-tab-group",2)),2&o&&(t.Q6J("setList",n.setList),t.xp6(1),t.Q6J("ngIf",n.cardExtrasForTable.length>0&&n.cardListForTable.length>0),t.xp6(1),t.Q6J("ngIf",!n.loading&&(n.cardListForTable.length>0||n.cardExtrasForTable.length>0)))},dependencies:[c.O5,B,H,K.oG,_.SP,_.uX]}),e})();var at=i(2613),nt=i(3060);const it=[{path:"set-list",component:ot}];let lt=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[c.ez,at.m,nt.Bz.forChild(it)]}),e})()}}]);