function Transitions(){}(function(){var W3={'step-resolution':16,'long-fallback':false,'base-zindex':2},Z=this,C=null,A0=true,G0=false,M2=['fade','wipe','bars','grow','twist','skew','slide'],D1={Q3:['G','E','A1','U1','B','N','T','W'],O1:['X0','W'],T1:['S2','X3']},C2={W0:['opacity','MozOpacity','KhtmlOpacity'],U:['transform','MozTransform','WebkitTransform','OTransform']},W2='Origin',K='filters',R2='none',M='DXImageTransform.Microsoft.Matrix',A3='DXImageTransform.Microsoft.Alpha',B3='progid:'+M+'(sizingMethod="clip",filterType="nearest neighbor")'+' progid:'+A3+'(opacity=100)',P=1.5707963267948966,C1={fade:[],wipe:['LR','RL','TB','BT','TLBR','TRBL','BLTR','BRTL','MLRC','MRLC','TCBC','BCTC','CVE','CHE','CC'],slide:['SLR','SRL','STB','SBT','STLBR','STRBL','SBLTR','SBRTL','DLR','DRL','DTB','DBT','QCC'],twist:['TLC','TLA','TRC','TRA','BLC','BLA','BRC','BRA','MLC','MLA','MRC','MRA','TCC','TCA','BCC','BCA'],skew:['TLC','TLA','TLB','TLF','TLDF','TRC','TRA','TRB','TRF','TRDF','BLC','BLA','BLB','BLF','BLDF','BRC','BRA','BRB','BRF','BRDF','MDC','MDA','CDC','CDA','TCCF','TCAF','TCFF','BCCF','BCAF','BCFF'],bars:(function(){var H1=['LR','RL','TB','BT','CVE','CHE','TLBR','TRBL','BLTR','BRTL','MLRC','MRLC','TCBC','BCTC','CC','SLR','SRL','STB','SBT','SCVE','SCHE'];f1(H1,function(i,I1){for(var j=2;j<=64;j++){if(i<6||j<=8){H1.push(j+I1);}}});H1.splice(0,21);return H1;})()},C3={position:'absolute',zIndex:W3['base-zindex'],margin:0,padding:0,border:'none'},D3={position:'relative',left:0,top:0},G3={},H3=0,L={W0:C,U:C},F1=C,G1=C;Z.supported=(f0(document.getElementById)&&f0(document.styleSheets)&&f0(f25().getBoundingClientRect));Z.version='2.0';f1(M2,function(i,O2){Z[O2]=function(){if(!Z.supported){return C;}return f24(f3(arguments.callee.J,arguments,'Q3'));};Z[O2].J=O2;});Z.cache=function(){if(!Z.supported){return C;}return f6(f3('cache',arguments,'O1'));};Z.define=function(){if(!Z.supported){return C;}return f7(f3('define',arguments,'T1'));};Z.pictures=function(){if(!Z.supported){return C;}else{return f9();}};if(!Z.supported){return;}function f24(A){A=f4(A);F1=F1||document.getElementsByTagName('body')[0];G1=G1||document.documentElement;if(!f0(A.G.__ix)){A.G.__ix='ix'+(H3++);}if(f13(A.G.__ix)===A0){return G0;}f20(A.G.__ix,A0);if(!f9()){return f11(A);}if(A.N>0){if(!f8(A.G,'W0')){A.N=0;if(A.J=='fade'){return f11(A);}}else{O.fade(A.G,1);}}var I={F:{x:A.G.offsetWidth,y:A.G.offsetHeight},P1:1};var Y2=O['pre'+A.J];if(f0(Y2)){Y2(A,I);}var Y=/^(slide|twist|skew)$/.test(A.J),X=f14(A.G,Y);for(var E=[],l=I.P1,i=0;i<l;i++){I.i=i;if((A.J!='slide'&&!A.T)||(A.J=='slide'&&((!A.T&&(A.B=='CC'||i==0))||(A.T&&(A.B!='CC'&&i==1))))){var L3=A.A1,M3=A.E;}else{var L3=A.G.alt,M3=A.G.src;}E[i]=f5(A.G,X,Y);if(/^(grow|twist|skew)$/.test(A.J)){if(!f8(E[i],'U')){f19(E[i]);return f11(A);}}f21(E[i],A,I);E[i].src=M3;}if(A.T){A.G.src=A.E;if(A.A1!=C){A.G.alt=A.A1;}if(A.N>0){O.fade(A.G,(1-A.N));}}var O0=f15(A.G),L0=[];f1(E,function(i,M0){L0.push(Y?M0.parentNode:M0);});if(!/^(bars|slide)$/.test(A.J)){E=E[0];}var H=1,X2=function(B1,S3){var N0=f15(A.G);if(N0.x!=O0.x||N0.y!=O0.y){var X=f14(A.G,Y);f1(L0,function(i,M0){f18(M0,A.G,X,G0);});O0=N0;}H=H-(1/B1);if(A.J!='fade'){O[A.J](E,A.B,H,I,A.T);}if(A.N>0){var A2=((1-A.N)+(A.N*H)),B2=((1-A.N)+(A.N*(1-H)));O.fade(A.G,!A.T?A2:B2);O.fade(E,!A.T?B2:A2);}},W=function(){f12(E,A,(A.N>0?L.W0:R2));if(A.W!=C){A.W();}};f10(A.U1,X2,W);return A0;}function f6(A){if(!f9()){return G0;}var R1=[],H2=[];f1(A.X0,function(i,I2){H2[i]=I2;});f1(H2,function(i,I2){if(f0(I2)){I2=f26(I2);if(I2!==''){R1[i]=new Image;R1[i].__i=i;function f16(J2){H2[J2]='';if(H2.join('')==''&&A.W!=C){A.W(R1);}}R1[i].onload=function(){f16(this.__i);};R1[i].onerror=function(){R1[this.__i]=C;f16(this.__i);};R1[i].src=I2;}}});return A0;}function f7(A){W3[A.S2]=A.X3;C3.zIndex=W3['base-zindex'];return A0;}function f3(J,D0,K2){if(J=='fade'){D0=f17(D0);D0.splice(4,0,'',1,G0);}var A={J:J};f1(D1[K2],function(i,Y0){if(typeof D0[i]=='function'){for(var j=i;j<D1[K2].length;j++){A[D1[K2][j]]=C;}A.W=D0[i];return G0;}if(!f0(D0[i])){A[Y0]=C;}else{A[Y0]=D0[i];}});return A;}function f4(A){if(typeof A.G=='string'&&/^#/.test(A.G)){A.G=document.getElementById(A.G.substr(1));}A.U1=parseFloat(A.U1)*1000;var N2=(1/W3['step-resolution'])*4000;if(A.U1<N2){A.U1=N2;}if(A.B!=C){A.B=A.B.toString().toUpperCase();if(A.B=='RND'){var U3=C1[A.J=='grow'?'wipe':A.J];A.B=U3[Math.floor(Math.random()*U3.length)];}}if(A.N==C){A.N=0;}else{if(/\%$/.test(A.N.toString())){A.N=parseInt(A.N,10)/100;}A.N=parseFloat(A.N);}if(A.T==C){A.T=G0;}else{A.T=/^1|y|yes|(tr)(ue)|\-$/i.test(A.T.toString());}return A;}var O={};O.fade=function(D,H){if(!(D instanceof Array)){D=[D];}f1(D,function(i,G){if(G!=C){if(L.W0==K){if(!f0(G[K][A3])){f2(G);}G[K][A3].opacity=H*100;}else{G.style[L.W0]=H==1?0.9999999:H;}}});};O.wipe=function(D,B,H,I,R){if(H==0){D.style.clip='rect(0,0,0,0)';}else if(H==1){D.style.clip='rect(auto,auto,auto,auto)';}else{var Y1=!R?H:(1-H),cx=I.F.x,cy=I.F.y,xi=cx*Y1,yi=cy*Y1;D.style.clip='rect('+(/^B[LRC]?T/.test(B)?yi:/^[CM][HCRL]/.test(B)?yi/2:0)+'px,'+(/^[TBM]?L/.test(B)?cx-xi:/^[CTB][VC]/.test(B)?cx-(xi/2):cx)+'px,'+(/^T[LRC]?B/.test(B)?cy-yi:/^[CM][HCRL]/.test(B)?cy-(yi/2):cy)+'px,'+(/^[TBM]?R/.test(B)?xi:/^[CTB][VC]/.test(B)?xi/2:0)+'px)';}};O.prebars=function(A,I){A.B=A.B.replace(/^([0-9]+)([a-z]+)$/i,function(a,b,c){I.J1=parseInt(b,10);return c;});I.E2=/^[LTRBC][LRTBVH][E]?$/.test(A.B);I.F2=/^S[LRC][LRV]/.test(A.B);I.G2=/^S[TBC][TBH]/.test(A.B);I.K1={x:I.F.x/I.J1,y:I.F.y/I.J1};I.L1={x:/^[STB]?[C][VCBT]/.test(A.B)?2:1,y:/^[S]?[C][HC]|M/.test(A.B)?2:1};if(I.J1<=16){I.K1.x=Math.ceil(I.K1.x);I.K1.y=Math.ceil(I.K1.y);}I.P1=Math.pow(I.J1,(I.E2?1:2));if(I.F2){I.P1+=Math.floor(I.J1/2);}else if(I.G2){I.P1+=I.J1;}};O.bars=function(D,B,H,I,R){var a=0,b=0,Q1=[],D2=!R?H:(1-H),zx=I.K1.x,zy=I.K1.y,xi=(zx/I.L1.x)*D2,yi=(zy/I.L1.y)*D2;if(D.length<=16){xi=Math.ceil(xi);yi=Math.ceil(yi);var I3=A0;}f1(D,function(i){var x=I.E2?i:a,y=I.E2?i:b,N3={x:(I.F2&&(Math.floor(b/2)<b/2))?zx/2:0,y:(I.G2&&(Math.floor(a/2)<a/2))?zy/2:0},bx=zx*x,by=zy*y,sx=bx-N3.x,sy=by-N3.y;if(f0(I3)){bx=Math.ceil(bx);by=Math.ceil(by);sx=Math.ceil(sx);sy=Math.ceil(sy);}Q1[i]='rect('+(/^T[LRCB]|S[LRTC][LRBV]/.test(B)?sy:/^[BS]?[BLRC][HCT]|M/.test(B)?sy+yi:0)+'px,'+(/^[TBSM]?[LC][VRTBC]/.test(B)?(zx*(x+1))-N3.x-xi:/^[TBSM]?[R][LTB]|S[TBC][TBH]/.test(B)?sx+zx:I.F.x)+'px,'+(/^[TS]?[TLRC][BHC]|M/.test(B)?(zy*(y+1))-N3.y-yi:/^B[TLRC]|S[LRBC][RLTV]/.test(B)?sy+zy:I.F.y)+'px,'+(/^[TBMS]?[L][RBT]|S[TBC][TBH]/.test(B)?sx:/^[TBSM]?[RC][VLTBC]/.test(B)?sx+xi:0)+'px)';if(++a==(I.J1+(N3.x>0?1:0))){a=0;b++;}});var i=0,l=D.length;do{D[i].style.clip=Q1[i];}while(++i<l);};O.grow=function(D,B,H,I,R){if(H==0||H==1){O.setscale(D,I.F,[H,H],[0,0]);}else{O.setscale(D,I.F,[/^TB|BT|CHE$/.test(B)?1:!R?(1-H):H,/^LR|RL|CVE$/.test(B)?1:!R?(1-H):H],[/^[TBM]?[R][LTB]/.test(B)?1:/^[TBM]?[LTB][RTB]|CH/.test(B)?0:0.5,/^[B][TLRC]/.test(B)?1:/^[TC]?[LRTVC][RLBE]/.test(B)?0:0.5]);}};O.setscale=function(D,F,H0,C0){if(L.U==K){if(!f0(D[K][M])){f2(D);}D[K][M].M11=H0[0];D[K][M].M22=H0[1];D[K][M].Dx=((1-H0[0])*F.x)*C0[0];D[K][M].Dy=((1-H0[1])*F.y)*C0[1];}else{D.style[L.U]='scale('+H0[0]+','+H0[1]+')';D.style[L.U+W2]=(C0[0]*100)+'% '+(C0[1]*100)+'%';}};O.twist=function(D,B,H,I,R){H=H==1?0:H==0?1:H;var F={x:I.F.x,y:I.F.y},M1=B.charAt(1)=='C'||B.charAt(0)=='M'?P*2:P,B0=(1-H)*M1;O.setrotate(D,F,B.charAt(2)=='C'?!R?-M1+B0:0-B0:!R?M1-B0:B0,[B.charAt(1)=='R'?1:B.charAt(1)=='L'?0:0.5,B.charAt(0)=='B'?1:B.charAt(0)=='T'?0:0.5]);};O.setrotate=function(D,F,E1,C0){var a=E1,ox=C0[0],oy=C0[1],x=F.x,y=F.y;if(L.U==K){if(!f0(D[K][M])){f2(D);}var c=Math.cos(a),s=Math.sin(a),m11=c,m12=-s,m21=s,m22=c;D[K][M].M11=m11;D[K][M].M12=m12;D[K][M].M21=m21;D[K][M].M22=m22;var dx=0,dy=0;x*=ox;y*=oy;if(ox>0&&oy==0){dx=x-(Math.cos(a)*x);dy=0-(Math.sin(a)*x);}else if(ox==0&&oy>0){dx=Math.sin(a)*y;dy=y-(Math.cos(a)*y);}else if(ox>0&&oy>0){dx=(x+(Math.sin(a)*y))-(Math.cos(a)*x);dy=0-(((Math.cos(a)*y)+(Math.sin(a)*x))-y);}D[K][M].Dx=dx;D[K][M].Dy=dy;}else{D.style[L.U]='rotate('+a+'rad)';D.style[L.U+W2]=(ox*100)+'% '+(oy*100)+'%';}};O.skew=function(D,B,H,I,R){H=H==1?0:H==0?0.99999:H;var F={x:I.F.x,y:I.F.y},M1=[/^(TL|BR)(C|DF)|BCFF|MDC$/.test(B)?P:/^(TR|BL)(A|DF)|TCFF|MDA$/.test(B)?-P:/^T(RB|LF)|B(LB|RF)|(TC|BC)AF$/.test(B)?P/2:/^T(LB|RF)|B(RB|LF)|(TC|BC)CF$/.test(B)?-P/2:0,/^(TL|BR)(A|DF)|BCFF|CDA$/.test(B)?P:/^(TR|BL)(C|DF)|TCFF|CDC$/.test(B)?-P:/^T(RB|LF)|B(LB|RF)|(TC|BC)AF$/.test(B)?P/2:/^T(LB|RF)|B(RB|LF)|(TC|BC)CF$/.test(B)?-P/2:0,],B0=[(1-H)*M1[0],(1-H)*M1[1]];O.setskew(D,F,[!R?M1[0]-B0[0]:0+B0[0],!R?M1[1]-B0[1]:0+B0[1]],[B.charAt(1)=='R'?1:B.charAt(1)=='L'?0:0.5,B.charAt(0)=='B'?1:B.charAt(0)=='T'?0:0.5],(/[DF][F]$/.test(B)&&(!R?Math.abs(B0[0])<P/2:Math.abs(B0[0])>P/2)),(/FF$/.test(B)));};O.setskew=function(D,F,E1,C0,W1,X1){var a=E1[0],b=E1[1],ox=C0[0],oy=C0[1],x=F.x,y=F.y;var Q=(Math.abs(a)-(P*0.85))*10;if(Q<0){Q=0;}if(L.U==K){if(!f0(D[K][M])){f2(D);}var m11=1,m12=a!=0?X1?a:Math.tan(a):0,m21=b!=0?X1?b:Math.tan(b):0,m22=1;if(W1&&!X1){m11=-1;m12=-m12;m21=-m21;m22=-1;}D[K][M].M11=m11;D[K][M].M12=m12;D[K][M].M21=m21;D[K][M].M22=m22;if(ox>0&&oy==0){if(a>0&&b>0){x=-x;}b=Math.abs(b);}if(oy>0&&ox==0){if(a>0&&b>0){y=-y;}a=Math.abs(a);}var dx=0,dy=0;if(W1&&!X1){var V={x:x+((y/Math.cos(a))*Math.sin(a)),y:y+((x/Math.cos(b))*Math.sin(b))};if(ox==0&&oy==0){dx=V.x+Q;dy=V.y+Q;}else if(ox>0&&oy==0){dx=V.x-Q;dy=y+Q;}else if(ox==0&&oy>0){dx=x+Q;dy=V.y-Q;}else if(ox>0&&oy>0){dx=x-Q;dy=y-Q;}}else{x*=ox;y*=oy;V={x:(y/Math.cos(a))*Math.sin(a),y:(x/Math.cos(b))*Math.sin(b)};if(ox>0&&oy==0){dx=0;dy=V.y;}else if(ox==0&&oy>0){dx=V.x;dy=0;}else if(ox>0&&oy>0){dx=-V.x;dy=-V.y;}}D[K][M].Dx=dx;D[K][M].Dy=dy;}else{var Q2='skew('+a+'rad,'+b+'rad)';if(W1){var V={x:(ox==0?-x-Q:x+Q),y:(((oy==0&&ox!=0.5)||(oy==1&&ox==0.5))?-y-Q:y+Q)};Q2+=' rotate('+(P*2)+'rad)'+' translate('+(V.x)+'px,'+(V.y)+'px)';}D.style[L.U]=Q2;D.style[L.U+W2]=(ox*100)+'% '+(oy*100)+'%';}};O.preslide=function(A,I){if(A.B.charAt(0)=='D'){I.P1=2;}else if(A.B.charAt(0)=='Q'){I.P1=4;}A.B=A.B.substr(1);};O.slide=function(D,B,H,I,R){if(!(D instanceof Array)){for(var S=D,D=[],i=0;i<4;i++){if(I.i==i){D.push(S);}else{D.push(C);}}}else if(D.length<3){for(var i=D.length;i<4;i++){D.push(C);}}H=H==1?0:H==0?1:H;var D2=!R?H:1-H,cx=I.F.x,cy=I.F.y,xi=cx*D2,yi=cy*D2,O3=[];if(D[0]!=C){O3[0]={x:/[RC]$/.test(B)?-xi:/L$/.test(B)?xi:0,y:/^C|T[LR]?B/.test(B)?-yi:/^B[LR]?T/.test(B)?yi:0};}if(D[1]!=C){O3[1]={x:/R$/.test(B)?cx-xi:/L$/.test(B)?-cx+xi:/C$/.test(B)?xi:0,y:/^T[LR]?B/.test(B)?cy-yi:/^B[LR]?T/.test(B)?-cy+yi:/C$/.test(B)?-yi:0};}if(D[2]!=C){O3[2]={x:-xi,y:yi};}if(D[3]!=C){O3[3]={x:xi,y:yi};}f1(D,function(i,G){if(G!=C){G.style.left=O3[i].x+'px';G.style.top=O3[i].y+'px';}});};function f8(D,E0){if(L[E0]!=C){return L[E0]!=R2;}for(var V3=C2[E0],l=V3.length,i=0;i<l;i++){if(f0(D.style[V3[i]])){L[E0]=V3[i];return A0;}}f2(D);if(typeof D[K]=='object'&&D[K].length>0&&((E0=='U'&&typeof D[K][M]=='object'&&typeof D[K][M].M11=='number')||(E0=='W0'&&typeof D[K][A3]=='object'&&typeof D[K][A3].opacity=='number'))){L[E0]=K;return A0;}L[E0]=R2;return G0;}function f2(D){D.style.filter=B3;}function f9(){var I0=new Image,J0='about:blank',K0='url(http:/\/0)';if(f0(I0.style.webkitOpacity)){I0.src=J0;return !I0.complete;}else if(f0(window.opera)){I0.src=J0;return I0.complete;}else if(f0(I0.style.MozOpacity)){if(/^file/.test(document.location.href)){return A0;}I0.style.backgroundImage=K0;return !/^(none|url\(invalid)/i.test(window.getComputedStyle(I0,'').backgroundImage);}else if(f0(I0.readyState)){I0.src=J0;return I0.width>0;}return A0;}function f21(D,A,I){if(A.J!='fade'){O[A.J=='bars'?'wipe':A.J](D,A.B,!A.T?0:1,I);}if(A.N>0){O.fade(D,!A.T?(1-A.N):1);}}function f12(E,A,V0){if(A.G.src.indexOf(A.E)<0){A.G.src=A.E;}if(A.A1!=C){A.G.alt=A.A1;}if(V0!=R2){O.fade(A.G,1);}if(E!=C){if(!(E instanceof Array)){E=[E];}f1(E,function(i,G){if(G!=C){f19(/^span/i.test(G.parentNode.nodeName)?G.parentNode:G);}});}f20(A.G.__ix,C);}function f11(A){function P2(){f12(C,A,R2);f19(F1.appendChild(document.createTextNode(' ')));if(A.W!=C){A.W();}}if(W3['long-fallback']==A0){f10(A.U1,C,P2);}else{window.setTimeout(P2,55);}return C;}function f10(R3,X2,W){var B1=Math.floor((R3/100)*(W3['step-resolution']/10)),S3=0,J3=new Date().getTime(),T3=function(){S3++;if(S3==B1){W();}else{if(X2!=C){X2(B1,S3);}var V1=((new Date().getTime()-J3)-(S3*(R3/B1)));var K3=(R3/B1)-V1;if(K3<10){K3=10;}window.setTimeout(T3,K3);}};window.setTimeout(T3,(R3/B1));}function f13(E3){if(!f0(G3[E3])){return C;}return G3[E3];}function f20(E3,F3){G3[E3]=F3;}function f14(S,Y){var X={x:100,y:100},T0=f23(F1.appendChild(f25(Y)),{left:X.x+'px',top:X.y+'px',visibility:'hidden'}),S0=f15(T0),U0={x:(S0.x-X.x),y:(S0.y-X.y)};X=f15(S);X.x-=U0.x;X.y-=U0.y;f19(T0);return X;}function f15(S){var R0=S.getBoundingClientRect();return{x:R0.left,y:R0.top};}function f5(F0,X,Y){var T2=new Image;T2.alt='';f22(T2,F0);if(Y){var U2=F1.appendChild(f25());U2.style.overflow='hidden';U2.appendChild(T2);f18(U2,F0,X,Y);f22(U2,F0);}else{T2=F1.appendChild(T2);f18(T2,F0,X,Y);}return T2;}function f18(V2,F0,X,Y){f23(V2,{left:X.x+'px',top:X.y+'px'});if(Y){f23(V2.firstChild,D3);}}function f22(V2,F0){V2.style.width=F0.offsetWidth+'px';V2.style.height=F0.offsetHeight+'px';}function f23(S,Q0){f1(C3,function(key,prop){S.style[key]=prop;});if(f0(Q0,C)){f1(Q0,function(key,prop){S.style[key]=prop;});}return S;}function f0(P3,N1){if(typeof P3=='undefined'){return G0;}if(typeof N1=='undefined'){return A0;}return P3!==N1;}function f1(S1,X2){if(f0(S1.length)){for(var l=S1.length,i=0;i<l;i++){if(f0(X2(i,S1[i]))){break;}}}else{for(var i in S1){if(S1.hasOwnProperty(i)){if(f0(X2(i,S1[i]))){break;}}}}}function f17(D0){var X0=[];f1(D0,function(i,P0){X0[i]=P0;});return X0;}function f25(Y){return document.createElement(!f0(Y,A0)?'span':'img');}function f19(S){S.parentNode.removeChild(S);}function f26(s){return s.replace(/^\s+|\s+$/g,'');}}).apply(Transitions);