"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[765],{3765:(nt,A,u)=>{u.r(A),u.d(A,{AdminModule:()=>et});var c=u(6895),l=u(1048),t=u(4650),d=u(6311),g=u(7282),p=u(4859),P=u(3683),T=u(7392),f=u(8255),i=u(4006);function I(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"input",20),t.NdJ("ngModelChange",function(r){t.CHM(e);const s=t.oxw(2);return t.KtG(s.navSearchInput=r)})("ngModelChange",function(){t.CHM(e);const r=t.oxw(2);return t.KtG(r.onNavSearchInputChange())}),t.qZA()}if(2&n){const e=t.oxw(2);t.Q6J("ngModel",e.navSearchInput)}}function S(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div",11),t.YNc(1,I,1,1,"input",12),t.TgZ(2,"button",13),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.showInput=!r.showInput)}),t.TgZ(3,"mat-icon"),t._uU(4,"search"),t.qZA()()()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.showInput)}}function y(n,a){1&n&&(t.TgZ(0,"span",21),t._uU(1,"Back"),t.qZA())}function w(n,a){1&n&&(t.TgZ(0,"span",22),t._uU(1,"Posts"),t.qZA())}function L(n,a){1&n&&(t.TgZ(0,"span",23),t._uU(1,"Create"),t.qZA())}function q(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"span",24),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.logout())}),t._uU(1,"logout"),t.qZA()}}function k(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"input",20),t.NdJ("ngModelChange",function(r){t.CHM(e);const s=t.oxw();return t.KtG(s.navSearchInput=r)})("ngModelChange",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.onNavSearchInputChange())}),t.qZA()}if(2&n){const e=t.oxw();t.Q6J("ngModel",e.navSearchInput)}}const J=function(){return{exact:!0}};let O=(()=>{class n{constructor(e,o){this.auth=e,this.sharedService=o,this.showInput=!1,this.navSearchInput=""}ngOnInit(){}logout(){this.auth.logout()}onNavSearchInputChange(){this.sharedService.navSearchInputSource$.next(this.navSearchInput)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(d.e),t.Y36(g.F))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-admin-layout"]],decls:35,vars:9,consts:[["color","primary",1,"navBar"],["routerLink","","routerLinkActive","active",3,"routerLinkActiveOptions"],[1,"spacer"],[1,"navMenu"],["class","search",4,"ngIf"],["routerLink","/admin/posts",4,"ngIf"],["routerLink","/admin/posts","routerLinkActive","active",4,"ngIf"],["routerLink","/admin/create","routerLinkActive","active",4,"ngIf"],["routerLink","/admin/login","routerLinkActive","active"],[3,"click",4,"ngIf"],[1,"navMenuIcon"],[1,"search"],[3,"ngModel","ngModelChange",4,"ngIf"],["mat-icon-button","",3,"click"],["mat-icon-button","",3,"matMenuTriggerFor"],["menu","matMenu"],["routerLink","/admin/posts","mat-menu-item",""],["routerLink","/admin/create","mat-menu-item",""],["routerLink","/admin/login","routerLinkActive","active","mat-menu-item",""],["mat-menu-item","",3,"click"],[3,"ngModel","ngModelChange"],["routerLink","/admin/posts"],["routerLink","/admin/posts","routerLinkActive","active"],["routerLink","/admin/create","routerLinkActive","active"],[3,"click"]],template:function(e,o){if(1&e&&(t.TgZ(0,"mat-toolbar",0)(1,"span",1)(2,"h1"),t._uU(3,"Blog"),t.qZA()(),t._UZ(4,"span",2),t.TgZ(5,"div",3),t.YNc(6,S,5,1,"div",4),t.YNc(7,y,2,0,"span",5),t.YNc(8,w,2,0,"span",6),t.YNc(9,L,2,0,"span",7),t.TgZ(10,"span",8),t._uU(11,"login"),t.qZA(),t.YNc(12,q,2,0,"span",9),t.qZA(),t.TgZ(13,"div",10)(14,"div",11),t.YNc(15,k,1,1,"input",12),t.TgZ(16,"button",13),t.NdJ("click",function(){return o.showInput=!o.showInput}),t.TgZ(17,"mat-icon"),t._uU(18,"search"),t.qZA()()(),t.TgZ(19,"button",14)(20,"mat-icon"),t._uU(21,"menu"),t.qZA()(),t.TgZ(22,"mat-menu",null,15)(24,"button",16),t._uU(25,"Back"),t.qZA(),t.TgZ(26,"button",16),t._uU(27,"Posts"),t.qZA(),t.TgZ(28,"button",17),t._uU(29,"Create"),t.qZA(),t.TgZ(30,"button",18),t._uU(31,"login"),t.qZA(),t.TgZ(32,"button",19),t.NdJ("click",function(){return o.logout()}),t._uU(33,"logout"),t.qZA()()()(),t._UZ(34,"router-outlet")),2&e){const r=t.MAs(23);t.xp6(1),t.Q6J("routerLinkActiveOptions",t.DdM(8,J)),t.xp6(5),t.Q6J("ngIf",o.auth.isAuthenticated()),t.xp6(1),t.Q6J("ngIf",o.auth.isAuthenticated()),t.xp6(1),t.Q6J("ngIf",o.auth.isAuthenticated()),t.xp6(1),t.Q6J("ngIf",o.auth.isAuthenticated()),t.xp6(3),t.Q6J("ngIf",o.auth.isAuthenticated()),t.xp6(3),t.Q6J("ngIf",o.showInput),t.xp6(4),t.Q6J("matMenuTriggerFor",r)}},dependencies:[l.lC,l.rH,l.Od,c.O5,p.lW,P.Ye,T.Hw,f.VK,f.OP,f.p6,i.Fj,i.JJ,i.On],styles:[".navBar[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;z-index:1}span[_ngcontent-%COMP%]{margin:20px}.active[_ngcontent-%COMP%]{color:#c1c1c1}span[_ngcontent-%COMP%]:hover{cursor:pointer}.search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border-radius:25px;max-width:150px;text-align:center;width:100%;outline:none;font-size:20px;vertical-align:middle;border:none;padding:0}.navMenu[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.navMenuIcon[_ngcontent-%COMP%]{display:none}@media screen and (max-width: 900px){.navMenu[_ngcontent-%COMP%]{display:none}.navMenuIcon[_ngcontent-%COMP%]{display:flex}}"]}),n})();var h=u(4051),U=u(7009);let _=(()=>{class n{constructor(e){this.snackBar=e}openSnackBar(e){this.snackBar.open(e,"Close",{duration:3e3})}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(U.ux))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var v=u(3546),m=u(9549),C=u(4144),x=u(8985);const N=function(n){return{error:n}},E=function(n){return{"error-quill":n}};let F=(()=>{class n{constructor(e,o){this.postsService=e,this.matSnackBar=o}ngOnInit(){this.form=new i.cw({author:new i.NI("",[i.kI.required]),title:new i.NI("",[i.kI.required]),text:new i.NI("",[i.kI.required])})}submit(){this.form.invalid||(this.createSub=this.postsService.createPost({author:this.form.value.author,title:this.form.value.title,text:this.form.value.text,date:new Date}).subscribe(()=>{this.formDirective.resetForm(),this.matSnackBar.openSnackBar("Post Created !")}))}ngOnDestroy(){this.createSub&&this.createSub.unsubscribe()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(h.P),t.Y36(_))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-create-page"]],viewQuery:function(e,o){if(1&e&&t.Gf(i.sg,5),2&e){let r;t.iGM(r=t.CRH())&&(o.formDirective=r.first)}},decls:19,vars:8,consts:[[1,"card",3,"formGroup","ngSubmit"],[1,"logForm"],["appearance","fill"],["matInput","","type","text","formControlName","author"],["matInput","","type","text","formControlName","title"],[1,"quill-container"],[3,"ngClass"],["formControlName","text",3,"ngClass"],["mat-flat-button","","color","primary","type","submit",3,"disabled"]],template:function(e,o){if(1&e&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return o.submit()}),t.TgZ(1,"mat-card")(2,"div",1)(3,"h1"),t._uU(4,"Create Post"),t.qZA()(),t.TgZ(5,"mat-form-field",2)(6,"mat-label"),t._uU(7,"Post Author"),t.qZA(),t._UZ(8,"input",3),t.qZA(),t.TgZ(9,"mat-form-field",2)(10,"mat-label"),t._uU(11,"Post Title"),t.qZA(),t._UZ(12,"input",4),t.qZA(),t.TgZ(13,"div",5)(14,"label",6),t._uU(15,"Post Text"),t.qZA(),t._UZ(16,"quill-editor",7),t.qZA(),t.TgZ(17,"button",8),t._uU(18,"Create Post"),t.qZA()()()),2&e){let r,s;t.Q6J("formGroup",o.form),t.xp6(14),t.Q6J("ngClass",t.VKq(4,N,(null==(r=o.form.get("text"))?null:r.touched)&&(null==(r=o.form.get("text"))?null:r.invalid))),t.xp6(2),t.Q6J("ngClass",t.VKq(6,E,(null==(s=o.form.get("text"))?null:s.touched)&&(null==(s=o.form.get("text"))?null:s.invalid))),t.xp6(1),t.Q6J("disabled",o.form.invalid)}},dependencies:[c.mk,p.lW,v.a8,m.KE,m.hX,C.Nt,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,x.g6],styles:[".card[_ngcontent-%COMP%]{max-width:800px;margin:0 auto}mat-form-field[_ngcontent-%COMP%]{width:100%}button[_ngcontent-%COMP%]{margin-top:15px}form[_ngcontent-%COMP%]{padding-top:100px}"]}),n})();function Y(n,a){if(1&n&&(t.TgZ(0,"div",11),t._uU(1),t.qZA()),2&n){const e=a.ngIf;t.xp6(1),t.Oqu(e)}}function Q(n,a){if(1&n&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Oqu(e.getErrorMessageEmail())}}function G(n,a){if(1&n&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Oqu(e.getErrorMessagePassword())}}const b=function(n){return{error:n}};let B=(()=>{class n{constructor(e,o){this.authService=e,this.router=o,this.hide=!0,this.passwordResponseError=!1,this.inputResponseError=!1}ngOnInit(){this.form=new i.cw({email:new i.NI("",[i.kI.required,i.kI.email]),password:new i.NI("",[i.kI.required,i.kI.minLength(6)])}),this.authService.getErrorSubject().subscribe(e=>{switch(e){case"Invalid password":this.passwordResponseError=!0,this.inputResponseError=!1;break;case"Wrong email":this.inputResponseError=!0,this.passwordResponseError=!1;break;default:this.passwordResponseError=!1,this.inputResponseError=!1}})}getErrorMessageEmail(){return this.form.get("email")?.hasError("required")?"You must enter a Email":this.form.get("email")?.hasError("email")?"Not a valid email":""}getErrorMessagePassword(){return this.form.get("password")?.hasError("required")?"You must enter a password":this.form.get("password")?.hasError("minlength")?`Current length ${this.form.get("password")?.getError("minlength").actualLength}, required length \n      ${this.form.get("password")?.getError("minlength").requiredLength}`:null}submit(){if(this.form.invalid)return;const e={...this.form.value};this.authService.login(e).subscribe(()=>{this.router.navigate(["/admin","posts"]),this.formDirective.resetForm()})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(d.e),t.Y36(l.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-login-page"]],viewQuery:function(e,o){if(1&e&&t.Gf(i.sg,5),2&e){let r;t.iGM(r=t.CRH())&&(o.formDirective=r.first)}},decls:24,vars:17,consts:[[3,"formGroup","ngSubmit"],[1,"card"],[1,"logForm"],["class","error",4,"ngIf"],["appearance","fill"],[3,"ngClass"],["matInput","","placeholder","email","formControlName","email","required",""],[4,"ngIf"],["matInput","","placeholder","password","formControlName","password","required","",3,"type"],["type","button","mat-icon-button","","matSuffix","",3,"click"],["type","submit","mat-raised-button","","color","primary",3,"disabled"],[1,"error"]],template:function(e,o){if(1&e&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return o.submit()}),t.TgZ(1,"mat-card",1)(2,"div",2)(3,"h1"),t._uU(4,"Lonin Form"),t.qZA(),t.YNc(5,Y,2,1,"div",3),t.ALo(6,"async"),t.qZA(),t.TgZ(7,"div")(8,"mat-form-field",4)(9,"mat-label",5),t._uU(10,"Enter your email"),t.qZA(),t._UZ(11,"input",6),t.YNc(12,Q,2,1,"mat-error",7),t.qZA()(),t.TgZ(13,"div")(14,"mat-form-field",4)(15,"mat-label",5),t._uU(16,"Enter your password"),t.qZA(),t._UZ(17,"input",8),t.YNc(18,G,2,1,"mat-error",7),t.TgZ(19,"button",9),t.NdJ("click",function(){return o.hide=!o.hide}),t.TgZ(20,"mat-icon"),t._uU(21),t.qZA()()()(),t.TgZ(22,"button",10),t._uU(23,"Login"),t.qZA()()()),2&e){let r,s;t.Q6J("formGroup",o.form),t.xp6(5),t.Q6J("ngIf",t.lcZ(6,11,o.authService.error$)),t.xp6(4),t.Q6J("ngClass",t.VKq(13,b,o.inputResponseError)),t.xp6(3),t.Q6J("ngIf",null==(r=o.form.get("email"))?null:r.invalid),t.xp6(3),t.Q6J("ngClass",t.VKq(15,b,o.passwordResponseError)),t.xp6(2),t.Q6J("type",o.hide?"password":"text"),t.xp6(1),t.Q6J("ngIf",null==(s=o.form.get("password"))?null:s.invalid),t.xp6(1),t.uIk("aria-label","Hide password")("aria-pressed",o.hide),t.xp6(2),t.Oqu(o.hide?"visibility_off":"visibility"),t.xp6(1),t.Q6J("disabled",o.form.invalid)}},dependencies:[c.mk,c.O5,p.lW,v.a8,m.TO,m.KE,m.hX,m.R9,C.Nt,T.Hw,i._Y,i.Fj,i.JJ,i.JL,i.Q7,i.sg,i.u,c.Ov],styles:[".card[_ngcontent-%COMP%]{max-width:600px;margin:85px auto}mat-form-field[_ngcontent-%COMP%]{width:100%}.logForm[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}form[_ngcontent-%COMP%]{padding-top:100px}@media (max-width: 620px){.card[_ngcontent-%COMP%]{margin:20px}}"]}),n})();var K=u(4275);let M=(()=>{class n{constructor(e,o){this.authService=e,this.router=o}canActivate(e,o){return!!this.authService.isAuthenticated()||(this.router.navigate(["/admin","login"]),!1)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(d.e),t.LFG(l.F0))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var H=u(3900);const R=function(n){return{error:n}},D=function(n){return{"error-quill":n}};function j(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"form",1),t.NdJ("ngSubmit",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.submit())}),t.TgZ(1,"mat-card")(2,"div",2)(3,"h1"),t._uU(4,"Update Post"),t.qZA()(),t.TgZ(5,"mat-form-field",3)(6,"mat-label"),t._uU(7,"Post Title"),t.qZA(),t._UZ(8,"input",4),t.qZA(),t.TgZ(9,"div",5)(10,"label",6),t._uU(11,"Post Text"),t.qZA(),t._UZ(12,"quill-editor",7),t.qZA(),t.TgZ(13,"button",8),t._uU(14,"Update Post"),t.qZA()()()}if(2&n){const e=t.oxw();let o,r;t.Q6J("formGroup",e.form),t.xp6(10),t.Q6J("ngClass",t.VKq(4,R,(null==(o=e.form.get("text"))?null:o.touched)&&(null==(o=e.form.get("text"))?null:o.invalid))),t.xp6(2),t.Q6J("ngClass",t.VKq(6,D,(null==(r=e.form.get("text"))?null:r.touched)&&(null==(r=e.form.get("text"))?null:r.invalid))),t.xp6(1),t.Q6J("disabled",e.form.invalid)}}let X=(()=>{class n{constructor(e,o,r,s){this.postsServices=e,this.route=o,this.router=r,this.matSnackBar=s}ngOnInit(){this.route.params.pipe((0,H.w)(e=>this.postsServices.getPostById(e.id))).subscribe(e=>{this.post=e,this.form=new i.cw({title:new i.NI(e.title,[i.kI.required]),text:new i.NI(e.text,[i.kI.required])})})}submit(){if(this.form.invalid)return;const e={...this.post,text:this.form.value.text,title:this.form.value.title};this.postsServices.upDatePost(e).subscribe(o=>{this.router.navigate(["/admin","posts"]),this.matSnackBar.openSnackBar("Post updated !")})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(h.P),t.Y36(l.gz),t.Y36(l.F0),t.Y36(_))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-edit-page"]],decls:1,vars:1,consts:[["class","card",3,"formGroup","ngSubmit",4,"ngIf"],[1,"card",3,"formGroup","ngSubmit"],[1,"logForm"],["appearance","fill"],["matInput","","type","text","formControlName","title"],[1,"quill-container"],[3,"ngClass"],["formControlName","text",3,"ngClass"],["mat-flat-button","","color","primary","type","submit",3,"disabled"]],template:function(e,o){1&e&&t.YNc(0,j,15,8,"form",0),2&e&&t.Q6J("ngIf",o.form)},dependencies:[c.mk,c.O5,p.lW,v.a8,m.KE,m.hX,C.Nt,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,x.g6],styles:[".card[_ngcontent-%COMP%]{max-width:800px;margin:85px auto}mat-form-field[_ngcontent-%COMP%]{width:100%}button[_ngcontent-%COMP%]{margin-top:15px}"]}),n})(),$=(()=>{class n{constructor(e){this.shared=e}transform(e,o,r="title"){return o.trim()?e.filter(s=>s[r].toLowerCase().includes(o.toLowerCase())):e}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(g.F,16))},n.\u0275pipe=t.Yjl({name:"adminSearch",type:n,pure:!0}),n})();function z(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div")(1,"h2"),t._uU(2),t.qZA(),t.TgZ(3,"div",4)(4,"h3"),t._uU(5),t.TgZ(6,"small"),t._uU(7,"(author)"),t.qZA()(),t.TgZ(8,"p"),t._uU(9),t.ALo(10,"date"),t.qZA()(),t.TgZ(11,"div"),t._UZ(12,"quill-view-html",5),t.qZA(),t.TgZ(13,"div")(14,"button",6),t.NdJ("click",function(){const s=t.CHM(e).$implicit,Z=t.oxw(2);return t.KtG(Z.editPost(s.id))}),t._uU(15,"Edit"),t.qZA(),t.TgZ(16,"button",6),t.NdJ("click",function(){const s=t.CHM(e).$implicit,Z=t.oxw(2);return t.KtG(Z.removePost(s.id))}),t._uU(17,"Delete"),t.qZA()(),t._UZ(18,"hr"),t.qZA()}if(2&n){const e=a.$implicit;t.xp6(2),t.Oqu(e.title),t.xp6(3),t.hij("",e.author," "),t.xp6(4),t.Oqu(t.lcZ(10,4,e.date)),t.xp6(3),t.Q6J("content",e.text.slice(0,400)+"...")}}function V(n,a){if(1&n&&(t.TgZ(0,"div")(1,"div",2),t.YNc(2,z,19,6,"div",3),t.ALo(3,"adminSearch"),t.qZA()()),2&n){const e=t.oxw();t.xp6(2),t.Q6J("ngForOf",t.xi3(3,1,e.posts,e.navSearchInput))}}function W(n,a){1&n&&(t.TgZ(0,"h1"),t._uU(1,"Loading..."),t.qZA())}const tt=[{path:"",component:O,children:[{path:"posts",component:(()=>{class n{constructor(e,o,r,s){this.postsService=e,this.router=o,this.sharedService=r,this.matSnackBar=s,this.posts=[],this.navSearchInput=""}ngOnInit(){this.getPostSub=this.postsService.getPosts().subscribe(e=>{e.reverse(),this.posts=e}),this.sharedService.navSearchInputSource$.subscribe(e=>{this.navSearchInput=e})}ngOnDestroy(){this.getPostSub&&this.getPostSub.unsubscribe()}editPost(e){this.router.navigate(["/admin","edit",e])}removePost(e){e&&this.postsService.removePost(e).subscribe(()=>{this.posts=this.posts.filter(o=>o.id!=e),this.matSnackBar.openSnackBar("Post Deleted !")})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(h.P),t.Y36(l.F0),t.Y36(g.F),t.Y36(_))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-main"]],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["load",""],[1,"container"],[4,"ngFor","ngForOf"],[1,"header"],[3,"content"],["mat-button","",3,"click"]],template:function(e,o){if(1&e&&(t.YNc(0,V,4,4,"div",0),t.YNc(1,W,2,0,"ng-template",null,1,t.W1O)),2&e){const r=t.MAs(2);t.Q6J("ngIf",o.posts.length)("ngIfElse",r)}},dependencies:[c.sg,c.O5,p.lW,x.qH,c.uU,$],styles:[".container[_ngcontent-%COMP%]{max-width:800px;margin:22px auto;padding:60px 10px}.container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:center}.header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:0 20px}"]}),n})()},{path:"login",component:B},{path:"create",component:F,canActivate:[M]},{path:"edit/:id",component:X,canActivate:[M]}]}];let et=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[l.Bz.forChild(tt),c.ez,K.m]}),n})()}}]);