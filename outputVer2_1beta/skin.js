// Garden Gnome Software - Skin
// Pano2VR 6.1 beta2/17561
// Filename: Toyota_HS_TemplateV3a.ggsk
// Generated 2019-05-20T20:39:28

function pano2vrSkin(player,base) {
	player.addVariable('VehicleIntURL', 0, "");
	player.addVariable('VehicleHudURL', 0, "");
	player.addVariable('VehiclePopTitle', 0, "");
	player.addVariable('vis_intr_popup', 2, false);
	player.addVariable('vis_hud_popup', 2, false);
	player.addVariable('vis_info_popup', 2, false);
	player.addVariable('vis_TT_interior', 2, true);
	player.addVariable('vis_TT_hood', 2, true);
	player.addVariable('vis_userdata', 2, false);
	player.addVariable('vis_map', 2, false);
	player.addVariable('vis_image_popup', 2, false);
	player.addVariable('vis_timer', 2, false);
	player.addVariable('vis_image_popup_1', 2, false);
	player.addVariable('vis_info_popup_3', 2, false);
	player.addVariable('vis_website_1', 2, false);
	player.addVariable('opt_3d_preview', 2, true);
	player.addVariable('ScrnTnt', 2, true);
	player.addVariable('vis_loader', 2, true);
	player.addVariable('vis_thumbnail_menu', 2, true);
	player.addVariable('opt_thumbnail_menu_tooltip', 2, true);
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('configloaded', function() { me.callNodeChange(me.divSkin); });
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._screentint_info=document.createElement('div');
		el.ggId="screentint_info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='border : 1px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : -0.17%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._screentint_info.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._screentint_info.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getVariableValue('vis_intr_popup') == true) || 
				(player.getVariableValue('vis_hud_popup') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._screentint_info.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._screentint_info.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._screentint_info.style[domTransition]='';
				if (me._screentint_info.ggCurrentLogicStateVisible == 0) {
					me._screentint_info.style.visibility=(Number(me._screentint_info.style.opacity)>0||!me._screentint_info.style.opacity)?'inherit':'hidden';
					me._screentint_info.ggVisible=true;
				}
				else {
					me._screentint_info.style.visibility="hidden";
					me._screentint_info.ggVisible=false;
				}
			}
		}
		me._screentint_info.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._screentint_info);
		el=me._button_toggle_map=document.createElement('div');
		el.ggId="button_toggle_map";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 23px;';
		hs+='height : 32px;';
		hs+='left : 35px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_toggle_map.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_toggle_map.onclick=function (e) {
			var flag=me._map_1.ggScaleActive;
			if (player.transitionsDisabled) {
				me._map_1.style[domTransition]='none';
			} else {
				me._map_1.style[domTransition]='all 279ms ease-out 0ms';
			}
			if (flag) {
				me._map_1.ggParameter.sx=0;me._map_1.ggParameter.sy=0;
				me._map_1.style[domTransform]=parameterToTransform(me._map_1.ggParameter);
			} else {
				me._map_1.ggParameter.sx=1;me._map_1.ggParameter.sy=1;
				me._map_1.style[domTransform]=parameterToTransform(me._map_1.ggParameter);
			}
			me._map_1.ggScaleActive=!flag;
		}
		me._button_toggle_map.ggUpdatePosition=function (useTransition) {
		}
		el=me._button_open_map=document.createElement('div');
		els=me._button_open_map__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xIEJhc2ljLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLWJhc2ljLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIgoJCQl4PSIwcHgiIH'+
			'k9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSI+Cgk8cGF0aCBkPSJNMjguNDk5LDE1LjM0NGwtNy42NCwxLjk4M1Y5LjI0Mmw3LjY0LTEuOTA1VjE1LjM0NHogTTE5LjgzNiw5LjIyOXY3LjkzM2wtNy42NzMtMy44MzNWNS40MTYNCgkJQzEyLjE2Myw1LjQxNiwxOS43NzgsOS4yMDksMTkuODM2LDkuMjI5eiBNMTEuMTQxLDUuMTU1djguMDkyTDMuNSwxNS4xNjZWNy4wNkwxMS4xNDEsNS4xNTV6IE0zLjUsMTYuMjJs'+
			'Ny42NDEtMS45MTl2OC4zMg0KCQljMCwwLjA0NSwwLjAwOCwwLjA5LDAuMDE5LDAuMTMyTDMuNSwyNC42NjJWMTYuMjJ6IE0xMi4zMzUsMjIuODM4Yy0wLjA2My0wLjAzMi0wLjEyNy0wLjA1OC0wLjE5NC0wLjA4DQoJCWMwLjAxMi0wLjA0NCwwLjAyMS0wLjA5LDAuMDIxLTAuMTM3di04LjE0OWw3LjY3MywzLjgzMnY4LjI4MUwxMi4zMzUsMjIuODM4eiBNMjAuODU5LDI2Ljg0NnYtOC40NjJsNy42NC0xLjk4MkwyOC41LDI0Ljk0DQoJCUwyMC44NTksMjYuODQ2eiIvPg0KCTwvZz4KCTxnIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjIiPgoJPHBhdGggZD'+
			'0iTTI4LjQ5OSwxNS4zNDRsLTcuNjQsMS45ODNWOS4yNDJsNy42NC0xLjkwNVYxNS4zNDR6IE0xOS44MzYsOS4yMjl2Ny45MzNsLTcuNjczLTMuODMzVjUuNDE2DQoJCUMxMi4xNjMsNS40MTYsMTkuNzc4LDkuMjA5LDE5LjgzNiw5LjIyOXogTTExLjE0MSw1LjE1NXY4LjA5MkwzLjUsMTUuMTY2VjcuMDZMMTEuMTQxLDUuMTU1eiBNMy41LDE2LjIybDcuNjQxLTEuOTE5djguMzINCgkJYzAsMC4wNDUsMC4wMDgsMC4wOSwwLjAxOSwwLjEzMkwzLjUsMjQuNjYyVjE2LjIyeiBNMTIuMzM1LDIyLjgzOGMtMC4wNjMtMC4wMzItMC4xMjctMC4wNTgtMC4xOTQtMC4wOA0KCQljMC4wMTItMC4wNDQsMC4w'+
			'MjEtMC4wOSwwLjAyMS0wLjEzN3YtOC4xNDlsNy42NzMsMy44MzJ2OC4yODFMMTIuMzM1LDIyLjgzOHogTTIwLjg1OSwyNi44NDZ2LTguNDYybDcuNjQtMS45ODJMMjguNSwyNC45NA0KCQlMMjAuODU5LDI2Ljg0NnoiLz4NCgk8L2c+Cjwvc3ZnPg==';
		me._button_open_map__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;button_open_map;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_open_map__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xIEJhc2ljLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLWJhc2ljLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIgoJCQl4PSIwcHgiIH'+
			'k9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KCTxwYXRoIGQ9Ik0yOC40OTksMTUuMzQ0bC03LjY0LDEuOTgzVjkuMjQybDcuNjQtMS45MDVWMTUuMzQ0eiBNMTkuODM2LDkuMjI5djcuOTMzbC03LjY3My0zLjgzM1Y1LjQxNg0KCQlDMTIuMTYzLDUuNDE2LDE5Ljc3OCw5LjIwOSwxOS44MzYsOS4yMjl6IE0x'+
			'MS4xNDEsNS4xNTV2OC4wOTJMMy41LDE1LjE2NlY3LjA2TDExLjE0MSw1LjE1NXogTTMuNSwxNi4yMmw3LjY0MS0xLjkxOXY4LjMyDQoJCWMwLDAuMDQ1LDAuMDA4LDAuMDksMC4wMTksMC4xMzJMMy41LDI0LjY2MlYxNi4yMnogTTEyLjMzNSwyMi44MzhjLTAuMDYzLTAuMDMyLTAuMTI3LTAuMDU4LTAuMTk0LTAuMDgNCgkJYzAuMDEyLTAuMDQ0LDAuMDIxLTAuMDksMC4wMjEtMC4xMzd2LTguMTQ5bDcuNjczLDMuODMydjguMjgxTDEyLjMzNSwyMi44Mzh6IE0yMC44NTksMjYuODQ2di04LjQ2Mmw3LjY0LTEuOTgyTDI4LjUsMjQuOTQNCgkJTDIwLjg1OSwyNi44NDZ6Ii8+DQoJPC9nPgoJPGcgZm'+
			'lsbD0iI0ZGRkZGRiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KCTxwYXRoIGQ9Ik0yOC40OTksMTUuMzQ0bC03LjY0LDEuOTgzVjkuMjQybDcuNjQtMS45MDVWMTUuMzQ0eiBNMTkuODM2LDkuMjI5djcuOTMzbC03LjY3My0zLjgzM1Y1LjQxNg0KCQlDMTIuMTYzLDUuNDE2LDE5Ljc3OCw5LjIwOSwxOS44MzYsOS4yMjl6IE0xMS4xNDEsNS4xNTV2OC4wOTJMMy41LDE1LjE2NlY3LjA2TDExLjE0MSw1LjE1NXogTTMuNSwxNi4yMmw3LjY0MS0xLjkxOXY4LjMyDQoJCWMw'+
			'LDAuMDQ1LDAuMDA4LDAuMDksMC4wMTksMC4xMzJMMy41LDI0LjY2MlYxNi4yMnogTTEyLjMzNSwyMi44MzhjLTAuMDYzLTAuMDMyLTAuMTI3LTAuMDU4LTAuMTk0LTAuMDgNCgkJYzAuMDEyLTAuMDQ0LDAuMDIxLTAuMDksMC4wMjEtMC4xMzd2LTguMTQ5bDcuNjczLDMuODMydjguMjgxTDEyLjMzNSwyMi44Mzh6IE0yMC44NTksMjYuODQ2di04LjQ2Mmw3LjY0LTEuOTgyTDI4LjUsMjQuOTQNCgkJTDIwLjg1OSwyNi44NDZ6Ii8+DQoJPC9nPgo8L3N2Zz4=';
		me._button_open_map__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;button_open_map;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_open_map";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_open_map.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_open_map.onmouseover=function (e) {
			me._button_open_map__img.style.visibility='hidden';
			me._button_open_map__imgo.style.visibility='inherit';
			me.elementMouseOver['button_open_map']=true;
			me._tt_togglemap.logicBlock_visible();
		}
		me._button_open_map.onmouseout=function (e) {
			me._button_open_map__img.style.visibility='inherit';
			me._button_open_map__imgo.style.visibility='hidden';
			me.elementMouseOver['button_open_map']=false;
			me._tt_togglemap.logicBlock_visible();
		}
		me._button_open_map.ontouchend=function (e) {
			me.elementMouseOver['button_open_map']=false;
			me._tt_togglemap.logicBlock_visible();
		}
		me._button_open_map.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_togglemap=document.createElement('div');
		els=me._tt_togglemap__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_togglemap";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._tt_togglemap.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_togglemap.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_togglemap.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_togglemap.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_togglemap.style[domTransition]='left 0s, top 0s';
				if (me._tt_togglemap.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_togglemap.style.top='-25px';
					me._tt_togglemap.ggUpdatePosition(true);
				}
				else {
					me._tt_togglemap.ggDx=0;
					me._tt_togglemap.style.top='32px';
					me._tt_togglemap.ggUpdatePosition(true);
				}
			}
		}
		me._tt_togglemap.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['button_open_map'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_togglemap.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_togglemap.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_togglemap.style[domTransition]='left 0s, top 0s';
				if (me._tt_togglemap.ggCurrentLogicStateVisible == 0) {
					me._tt_togglemap.style.visibility=(Number(me._tt_togglemap.style.opacity)>0||!me._tt_togglemap.style.opacity)?'inherit':'hidden';
					me._tt_togglemap.ggVisible=true;
				}
				else {
					me._tt_togglemap.style.visibility="hidden";
					me._tt_togglemap.ggVisible=false;
				}
			}
		}
		me._tt_togglemap.logicBlock_text = function() {
			var newLogicStateText;
			if (
				(player.getVariableValue('vis_map') == true)
			)
			{
				newLogicStateText = 0;
			}
			else if (
				(player.getVariableValue('vis_map') == false)
			)
			{
				newLogicStateText = 1;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._tt_togglemap.ggCurrentLogicStateText != newLogicStateText) {
				me._tt_togglemap.ggCurrentLogicStateText = newLogicStateText;
				me._tt_togglemap.style[domTransition]='left 0s, top 0s';
				if (me._tt_togglemap.ggCurrentLogicStateText == 0) {
					me._tt_togglemap.ggText="Close Map";
					me._tt_togglemap__text.innerHTML=me._tt_togglemap.ggText;
					if (me._tt_togglemap.ggUpdateText) {
					me._tt_togglemap.ggUpdateText=function() {
						var hs="Close Map";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_togglemap.ggUpdatePosition) me._tt_togglemap.ggUpdatePosition();
					}
				}
				else if (me._tt_togglemap.ggCurrentLogicStateText == 1) {
					me._tt_togglemap.ggText="Open Map";
					me._tt_togglemap__text.innerHTML=me._tt_togglemap.ggText;
					if (me._tt_togglemap.ggUpdateText) {
					me._tt_togglemap.ggUpdateText=function() {
						var hs="Open Map";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_togglemap.ggUpdatePosition) me._tt_togglemap.ggUpdatePosition();
					}
				}
				else {
					me._tt_togglemap.ggText="";
					me._tt_togglemap__text.innerHTML=me._tt_togglemap.ggText;
					if (me._tt_togglemap.ggUpdateText) {
					me._tt_togglemap.ggUpdateText=function() {
						var hs="";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_togglemap.ggUpdatePosition) me._tt_togglemap.ggUpdatePosition();
					}
				}
			}
		}
		me._tt_togglemap.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._button_open_map.appendChild(me._tt_togglemap);
		me._button_toggle_map.appendChild(me._button_open_map);
		el=me._button_close_map=document.createElement('div');
		els=me._button_close_map__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiDQoJIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIG'+
			'lkPSJMYXllcl8xXzFfIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMi4wIj4NCgkNCgk8cGF0aCBvcGFjaXR5PSIxLjAiIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTM5LjMsMzU3LjhjMC40LDAsMC45LDAuMiwxLjIsMC41bDEuOCwxLjhjMC43LDAuNywwLjcsMS43LDAsMi40bC03My4zLDczLjNjLTAuMywwLjMtMC44LDAuNS0xLjIsMC41DQoJCXMtMC45LTAuMi0xLjItMC41bC0xLjgtMS44Yy0wLjctMC43LTAuNy0xLjcsMC0yLjRsNzMuMy03My4zQy0xNDAuMSwzNTgtMTM5LjcsMzU3LjgtMTM5LjMsMzU3LjgiLz4NCjwvZz4NCjxnIGlkPSJMYXllcl8yIj4NCjwvZz4NCjwvc3ZnPg0K'+
			'';
		me._button_close_map__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;button_close_map;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="button_close_map";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_close_map.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_close_map.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getVariableValue('vis_map') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_close_map.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_close_map.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_close_map.style[domTransition]='';
				if (me._button_close_map.ggCurrentLogicStateVisible == 0) {
					me._button_close_map.style.visibility=(Number(me._button_close_map.style.opacity)>0||!me._button_close_map.style.opacity)?'inherit':'hidden';
					me._button_close_map.ggVisible=true;
				}
				else {
					me._button_close_map.style.visibility="hidden";
					me._button_close_map.ggVisible=false;
				}
			}
		}
		me._button_close_map.ggUpdatePosition=function (useTransition) {
		}
		me._button_toggle_map.appendChild(me._button_close_map);
		me.divSkin.appendChild(me._button_toggle_map);
		el=me._button_fullscreen=document.createElement('div');
		el.ggId="button_fullscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 23px;';
		hs+='height : 32px;';
		hs+='left : 78px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_fullscreen.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_fullscreen.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._button_fullscreen.onmouseover=function (e) {
			me.elementMouseOver['button_fullscreen']=true;
			me._tt_fullscreen.logicBlock_visible();
		}
		me._button_fullscreen.onmouseout=function (e) {
			me.elementMouseOver['button_fullscreen']=false;
			me._tt_fullscreen.logicBlock_visible();
		}
		me._button_fullscreen.ontouchend=function (e) {
			me.elementMouseOver['button_fullscreen']=false;
			me._tt_fullscreen.logicBlock_visible();
		}
		me._button_fullscreen.ggUpdatePosition=function (useTransition) {
		}
		el=me._button_image_normalscreen=document.createElement('div');
		els=me._button_image_normalscreen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xIEJhc2ljLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLWJhc2ljLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIgoJCQl4PSIwcHgiIH'+
			'k9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSI+Cgk8cGF0aCBkPSJNMTYsMTQuODA0SDQuNjk3Yy0wLjMxNSwwLTAuNjI0LDAuMTI4LTAuODQ2LDAuMzUxQzMuNjI3LDE1LjM3NywzLjUsMTUuNjg2LDMuNSwxNnY4LjEyDQoJCWMwLDAuMzE1LDAuMTI3LDAuNjI0LDAuMzUsMC44NDZjMC4yMjMsMC4yMjQsMC41MzEsMC4zNTEsMC44NDYsMC4zNTFIMTZjMC4zMiwwLDAuNjItMC4xMjQsMC44NDYtMC4zNTENCgkJYzAu'+
			'MjI2LTAuMjI2LDAuMzUtMC41MjUsMC4zNS0wLjg0NlYxNmMwLTAuMzE0LTAuMTI4LTAuNjIzLTAuMzUtMC44NDZDMTYuNjIzLDE0LjkzMiwxNi4zMTQsMTQuODA0LDE2LDE0LjgwNHogTTE0LjgwNCwyMi45MjQNCgkJSDUuODkzdi01LjcyOGg4LjkxMVYyMi45MjR6IE00LjY5NywxMy45OThjMC42NjEsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NnYtMC4zMDhjMC0wLjY2LTAuNTM2LTEuMTk1LTEuMTk2LTEuMTk1DQoJCWMtMC42NjEsMC0xLjE5NiwwLjUzNS0xLjE5NiwxLjE5NXYwLjMwOEMzLjUsMTMuNDYyLDQuMDM2LDEzLjk5OCw0LjY5NywxMy45OTh6IE00LjY5NywxMC40NzdjMC42NjEsMC'+
			'wxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5N2gwDQoJCVY5LjA3NmMwLjY2MSwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2YzAtMC42Ni0wLjUzNi0xLjE5Ni0xLjE5Ni0xLjE5Nkg0LjY5N2MtMC4zMTUsMC0wLjYyMywwLjEyNy0wLjg0NiwwLjM1DQoJCUMzLjYyOCw3LjI1NywzLjUsNy41NjQsMy41LDcuODh2MS4zOTlDMy41LDkuOTQsNC4wMzYsMTAuNDc3LDQuNjk3LDEwLjQ3N3ogTTE5LjI4OSw5LjA3NmgwLjI0MmMwLjY2MSwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2DQoJCXMtMC41MzUtMS4xOTYtMS4xOTYtMS4xOTZoLTAuMjQyYy0wLjY2MSwwLTEuMTk3LDAuNTM2LTEuMTk3LDEuMTk2UzE4'+
			'LjYyOCw5LjA3NiwxOS4yODksOS4wNzZ6IE0xNi4xMjIsNi42ODRoLTAuMjQzDQoJCWMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NnMwLjUzNiwxLjE5NiwxLjE5NiwxLjE5NmgwLjI0M2MwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2UzE2Ljc4Miw2LjY4NCwxNi4xMjIsNi42ODR6DQoJCSBNMjIuNjk4LDkuMDc2aDAuMjQzYzAuNjYsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NnMtMC41MzYtMS4xOTYtMS4xOTYtMS4xOTZoLTAuMjQzYy0wLjY2LDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTYNCgkJUzIyLjAzOCw5LjA3NiwyMi42OTgsOS4wNzZ6IE05LjA2LDkuMDc2aDAuMj'+
			'QyYzAuNjYsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NlM5Ljk2Miw2LjY4NCw5LjMwMiw2LjY4NEg5LjA2DQoJCWMtMC42NjEsMC0xLjE5NywwLjUzNi0xLjE5NywxLjE5NlM4LjM5OSw5LjA3Niw5LjA2LDkuMDc2eiBNMTIuNDY5LDkuMDc2aDAuMjQzYzAuNjYxLDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTYNCgkJcy0wLjUzNi0xLjE5Ni0xLjE5Ni0xLjE5NmgtMC4yNDNjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZTMTEuODA4LDkuMDc2LDEyLjQ2OSw5LjA3NnogTTI3LjMwNCwxMS4xMTENCgkJYy0wLjY2MSwwLTEuMTk2LDAuNTM1LTEuMTk2LDEuMTk2djAuMzA4YzAsMC42Niww'+
			'LjUzNSwxLjE5NiwxLjE5NiwxLjE5NmMwLjY2LDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZ2LTAuMzA4DQoJCUMyOC41LDExLjY0NiwyNy45NjQsMTEuMTExLDI3LjMwNCwxMS4xMTF6IE0yNy4zMDQsMTQuNjVjLTAuNjYxLDAtMS4xOTYsMC41MzUtMS4xOTYsMS4xOTZ2MC4zMDhjMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2DQoJCWMwLjY2LDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZ2LTAuMzA4QzI4LjUsMTUuMTg2LDI3Ljk2NCwxNC42NSwyNy4zMDQsMTQuNjV6IE0yNy4zMDQsMjEuNzI4Yy0wLjY2MSwwLTEuMTk2LDAuNTM1LTEuMTk2LDEuMTk2DQoJCWgtMC4yMzRjLTAuNjYsMC'+
			'0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NmMwLDAuNjYxLDAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2aDEuNDMxYzAuMzE0LDAsMC42MjMtMC4xMjgsMC44NDYtMC4zNTENCgkJczAuMzUxLTAuNTMsMC4zNTEtMC44NDZ2LTEuMTk2QzI4LjUsMjIuMjY0LDI3Ljk2NCwyMS43MjgsMjcuMzA0LDIxLjcyOHogTTI3LjMwNCwxOC4xODljLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MC4zMDgNCgkJYzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmMwLjY2LDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZ2LTAuMzA4QzI4LjUsMTguNzI2LDI3Ljk2NCwxOC4xODksMjcuMzA0LDE4LjE4OXog'+
			'TTI4LjE0OSw3LjAzMw0KCQljLTAuMjIzLTAuMjIyLTAuNTMxLTAuMzUtMC44NDYtMC4zNWgtMS4xOTZjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZjMCwwLjY2MSwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5Ng0KCQljMCwwLjY2MSwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmMwLjY2LDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZWNy44OEMyOC41LDcuNTY0LDI4LjM3Miw3LjI1NywyOC4xNDksNy4wMzN6IE0yMS44NjMsMTMuMjYxDQoJCWwwLjIyMS0wLjE0N2MwLjQyOC0wLjI4NSwwLjU0Mi0wLjg2MywwLjI1Ny0xLjI5MWMtMC4yODYtMC40MjgtMC44NjMtMC41NDItMS4yOTEtMC4yNT'+
			'ZsLTAuMjIxLDAuMTQ2DQoJCWMtMC40MjcsMC4yODYtMC41NDIsMC44NjMtMC4yNTcsMS4yOTFjMC4xOCwwLjI2OSwwLjQ3NCwwLjQxNCwwLjc3NCwwLjQxNEMyMS41MjQsMTMuNDE4LDIxLjcwNCwxMy4zNjcsMjEuODYzLDEzLjI2MXoNCgkJIE0xOS4zMjksMjIuOTI0aC0wLjI0MmMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NmMwLDAuNjYxLDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2aDAuMjQyYzAuNjYxLDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTYNCgkJQzIwLjUyNSwyMy40NiwxOS45OSwyMi45MjQsMTkuMzI5LDIyLjkyNHogTTE4LjU4NCwxNS4yNjRjMC4xNzgsMCwwLjM1Ny0w'+
			'LjA1MSwwLjUxNy0wLjE1N2wwLjIyMS0wLjE0Nw0KCQljMC40MjgtMC4yODUsMC41NDItMC44NjMsMC4yNTctMS4yOWMtMC4yODUtMC40MjgtMC44NjMtMC41NDItMS4yOTEtMC4yNTdsLTAuMjIyLDAuMTQ3Yy0wLjQyNywwLjI4Ni0wLjU0MiwwLjg2My0wLjI1NiwxLjI5MQ0KCQlDMTcuOTg5LDE1LjExOSwxOC4yODMsMTUuMjY0LDE4LjU4NCwxNS4yNjR6IE0yMi43MzksMjIuOTI0aC0wLjI0MmMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5Ng0KCQljMCwwLjY2MSwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgwLjI0MmMwLjY2LDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZDMjMuOTM2LD'+
			'IzLjQ2LDIzLjM5OSwyMi45MjQsMjIuNzM5LDIyLjkyNHogTTI1LjEwNCw5Ljk3Ng0KCQljLTAuMjg1LTAuNDI3LTAuODYzLTAuNTQyLTEuMjkxLTAuMjU2bC0wLjIyMSwwLjE0N2MtMC40MjgsMC4yODUtMC41NDIsMC44NjMtMC4yNTYsMS4yOWMwLjE3OSwwLjI2OSwwLjQ3NCwwLjQxNCwwLjc3NCwwLjQxNA0KCQljMC4xNzgsMCwwLjM1Ny0wLjA1MSwwLjUxNi0wLjE1NmwwLjIyMi0wLjE0OEMyNS4yNzQsMTAuOTgxLDI1LjM4OSwxMC40MDMsMjUuMTA0LDkuOTc2eiIvPg0KCTwvZz4KCTxnIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjIiPgoJPHBhdGgg'+
			'ZD0iTTE2LDE0LjgwNEg0LjY5N2MtMC4zMTUsMC0wLjYyNCwwLjEyOC0wLjg0NiwwLjM1MUMzLjYyNywxNS4zNzcsMy41LDE1LjY4NiwzLjUsMTZ2OC4xMg0KCQljMCwwLjMxNSwwLjEyNywwLjYyNCwwLjM1LDAuODQ2YzAuMjIzLDAuMjI0LDAuNTMxLDAuMzUxLDAuODQ2LDAuMzUxSDE2YzAuMzIsMCwwLjYyLTAuMTI0LDAuODQ2LTAuMzUxDQoJCWMwLjIyNi0wLjIyNiwwLjM1LTAuNTI1LDAuMzUtMC44NDZWMTZjMC0wLjMxNC0wLjEyOC0wLjYyMy0wLjM1LTAuODQ2QzE2LjYyMywxNC45MzIsMTYuMzE0LDE0LjgwNCwxNiwxNC44MDR6IE0xNC44MDQsMjIuOTI0DQoJCUg1Ljg5M3YtNS43MjhoOC'+
			'45MTFWMjIuOTI0eiBNNC42OTcsMTMuOTk4YzAuNjYxLDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZ2LTAuMzA4YzAtMC42Ni0wLjUzNi0xLjE5NS0xLjE5Ni0xLjE5NQ0KCQljLTAuNjYxLDAtMS4xOTYsMC41MzUtMS4xOTYsMS4xOTV2MC4zMDhDMy41LDEzLjQ2Miw0LjAzNiwxMy45OTgsNC42OTcsMTMuOTk4eiBNNC42OTcsMTAuNDc3YzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTdoMA0KCQlWOS4wNzZjMC42NjEsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NmMwLTAuNjYtMC41MzYtMS4xOTYtMS4xOTYtMS4xOTZINC42OTdjLTAuMzE1LDAtMC42MjMsMC4xMjctMC44NDYsMC4zNQ0K'+
			'CQlDMy42MjgsNy4yNTcsMy41LDcuNTY0LDMuNSw3Ljg4djEuMzk5QzMuNSw5Ljk0LDQuMDM2LDEwLjQ3Nyw0LjY5NywxMC40Nzd6IE0xOS4yODksOS4wNzZoMC4yNDJjMC42NjEsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5Ng0KCQlzLTAuNTM1LTEuMTk2LTEuMTk2LTEuMTk2aC0wLjI0MmMtMC42NjEsMC0xLjE5NywwLjUzNi0xLjE5NywxLjE5NlMxOC42MjgsOS4wNzYsMTkuMjg5LDkuMDc2eiBNMTYuMTIyLDYuNjg0aC0wLjI0Mw0KCQljLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZzMC41MzYsMS4xOTYsMS4xOTYsMS4xOTZoMC4yNDNjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny'+
			'0xLjE5NlMxNi43ODIsNi42ODQsMTYuMTIyLDYuNjg0eg0KCQkgTTIyLjY5OCw5LjA3NmgwLjI0M2MwLjY2LDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZzLTAuNTM2LTEuMTk2LTEuMTk2LTEuMTk2aC0wLjI0M2MtMC42NiwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2DQoJCVMyMi4wMzgsOS4wNzYsMjIuNjk4LDkuMDc2eiBNOS4wNiw5LjA3NmgwLjI0MmMwLjY2LDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZTOS45NjIsNi42ODQsOS4zMDIsNi42ODRIOS4wNg0KCQljLTAuNjYxLDAtMS4xOTcsMC41MzYtMS4xOTcsMS4xOTZTOC4zOTksOS4wNzYsOS4wNiw5LjA3NnogTTEyLjQ2OSw5LjA3Nmgw'+
			'LjI0M2MwLjY2MSwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2DQoJCXMtMC41MzYtMS4xOTYtMS4xOTYtMS4xOTZoLTAuMjQzYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2UzExLjgwOCw5LjA3NiwxMi40NjksOS4wNzZ6IE0yNy4zMDQsMTEuMTExDQoJCWMtMC42NjEsMC0xLjE5NiwwLjUzNS0xLjE5NiwxLjE5NnYwLjMwOGMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZjMC42NiwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2di0wLjMwOA0KCQlDMjguNSwxMS42NDYsMjcuOTY0LDExLjExMSwyNy4zMDQsMTEuMTExeiBNMjcuMzA0LDE0LjY1Yy0wLjY2MSwwLTEuMTk2LDAuNT'+
			'M1LTEuMTk2LDEuMTk2djAuMzA4YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5Ng0KCQljMC42NiwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2di0wLjMwOEMyOC41LDE1LjE4NiwyNy45NjQsMTQuNjUsMjcuMzA0LDE0LjY1eiBNMjcuMzA0LDIxLjcyOGMtMC42NjEsMC0xLjE5NiwwLjUzNS0xLjE5NiwxLjE5Ng0KCQloLTAuMjM0Yy0wLjY2LDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZjMCwwLjY2MSwwLjUzNiwxLjE5NiwxLjE5NiwxLjE5NmgxLjQzMWMwLjMxNCwwLDAuNjIzLTAuMTI4LDAuODQ2LTAuMzUxDQoJCXMwLjM1MS0wLjUzLDAuMzUxLTAuODQ2di0xLjE5NkMyOC41LDIyLjI2'+
			'NCwyNy45NjQsMjEuNzI4LDI3LjMwNCwyMS43Mjh6IE0yNy4zMDQsMTguMTg5Yy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2djAuMzA4DQoJCWMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZjMC42NiwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2di0wLjMwOEMyOC41LDE4LjcyNiwyNy45NjQsMTguMTg5LDI3LjMwNCwxOC4xODl6IE0yOC4xNDksNy4wMzMNCgkJYy0wLjIyMy0wLjIyMi0wLjUzMS0wLjM1LTAuODQ2LTAuMzVoLTEuMTk2Yy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2YzAsMC42NjEsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTYNCgkJYzAsMC42NjEsMC'+
			'41MzUsMS4xOTYsMS4xOTYsMS4xOTZjMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2VjcuODhDMjguNSw3LjU2NCwyOC4zNzIsNy4yNTcsMjguMTQ5LDcuMDMzeiBNMjEuODYzLDEzLjI2MQ0KCQlsMC4yMjEtMC4xNDdjMC40MjgtMC4yODUsMC41NDItMC44NjMsMC4yNTctMS4yOTFjLTAuMjg2LTAuNDI4LTAuODYzLTAuNTQyLTEuMjkxLTAuMjU2bC0wLjIyMSwwLjE0Ng0KCQljLTAuNDI3LDAuMjg2LTAuNTQyLDAuODYzLTAuMjU3LDEuMjkxYzAuMTgsMC4yNjksMC40NzQsMC40MTQsMC43NzQsMC40MTRDMjEuNTI0LDEzLjQxOCwyMS43MDQsMTMuMzY3LDIxLjg2MywxMy4yNjF6DQoJCSBN'+
			'MTkuMzI5LDIyLjkyNGgtMC4yNDJjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZjMCwwLjY2MSwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgwLjI0MmMwLjY2MSwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2DQoJCUMyMC41MjUsMjMuNDYsMTkuOTksMjIuOTI0LDE5LjMyOSwyMi45MjR6IE0xOC41ODQsMTUuMjY0YzAuMTc4LDAsMC4zNTctMC4wNTEsMC41MTctMC4xNTdsMC4yMjEtMC4xNDcNCgkJYzAuNDI4LTAuMjg1LDAuNTQyLTAuODYzLDAuMjU3LTEuMjljLTAuMjg1LTAuNDI4LTAuODYzLTAuNTQyLTEuMjkxLTAuMjU3bC0wLjIyMiwwLjE0N2MtMC40MjcsMC4yODYtMC41NDIsMC'+
			'44NjMtMC4yNTYsMS4yOTENCgkJQzE3Ljk4OSwxNS4xMTksMTguMjgzLDE1LjI2NCwxOC41ODQsMTUuMjY0eiBNMjIuNzM5LDIyLjkyNGgtMC4yNDJjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTYNCgkJYzAsMC42NjEsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMC4yNDJjMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2QzIzLjkzNiwyMy40NiwyMy4zOTksMjIuOTI0LDIyLjczOSwyMi45MjR6IE0yNS4xMDQsOS45NzYNCgkJYy0wLjI4NS0wLjQyNy0wLjg2My0wLjU0Mi0xLjI5MS0wLjI1NmwtMC4yMjEsMC4xNDdjLTAuNDI4LDAuMjg1LTAuNTQyLDAuODYzLTAuMjU2LDEuMjlj'+
			'MC4xNzksMC4yNjksMC40NzQsMC40MTQsMC43NzQsMC40MTQNCgkJYzAuMTc4LDAsMC4zNTctMC4wNTEsMC41MTYtMC4xNTZsMC4yMjItMC4xNDhDMjUuMjc0LDEwLjk4MSwyNS4zODksMTAuNDAzLDI1LjEwNCw5Ljk3NnoiLz4NCgk8L2c+Cjwvc3ZnPg==';
		me._button_image_normalscreen__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;button_image_normalscreen;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_normalscreen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xIEJhc2ljLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLWJhc2ljLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIgoJCQl4PSIwcHgiIH'+
			'k9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KCTxwYXRoIGQ9Ik0xNiwxNC44MDRINC42OTdjLTAuMzE1LDAtMC42MjQsMC4xMjgtMC44NDYsMC4zNTFDMy42MjcsMTUuMzc3LDMuNSwxNS42ODYsMy41LDE2djguMTINCgkJYzAsMC4zMTUsMC4xMjcsMC42MjQsMC4zNSwwLjg0NmMwLjIyMywwLjIyNCwwLjUz'+
			'MSwwLjM1MSwwLjg0NiwwLjM1MUgxNmMwLjMyLDAsMC42Mi0wLjEyNCwwLjg0Ni0wLjM1MQ0KCQljMC4yMjYtMC4yMjYsMC4zNS0wLjUyNSwwLjM1LTAuODQ2VjE2YzAtMC4zMTQtMC4xMjgtMC42MjMtMC4zNS0wLjg0NkMxNi42MjMsMTQuOTMyLDE2LjMxNCwxNC44MDQsMTYsMTQuODA0eiBNMTQuODA0LDIyLjkyNA0KCQlINS44OTN2LTUuNzI4aDguOTExVjIyLjkyNHogTTQuNjk3LDEzLjk5OGMwLjY2MSwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2di0wLjMwOGMwLTAuNjYtMC41MzYtMS4xOTUtMS4xOTYtMS4xOTUNCgkJYy0wLjY2MSwwLTEuMTk2LDAuNTM1LTEuMTk2LDEuMTk1djAuMzA4Qz'+
			'MuNSwxMy40NjIsNC4wMzYsMTMuOTk4LDQuNjk3LDEzLjk5OHogTTQuNjk3LDEwLjQ3N2MwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk3aDANCgkJVjkuMDc2YzAuNjYxLDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZjMC0wLjY2LTAuNTM2LTEuMTk2LTEuMTk2LTEuMTk2SDQuNjk3Yy0wLjMxNSwwLTAuNjIzLDAuMTI3LTAuODQ2LDAuMzUNCgkJQzMuNjI4LDcuMjU3LDMuNSw3LjU2NCwzLjUsNy44OHYxLjM5OUMzLjUsOS45NCw0LjAzNiwxMC40NzcsNC42OTcsMTAuNDc3eiBNMTkuMjg5LDkuMDc2aDAuMjQyYzAuNjYxLDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTYNCgkJcy0wLjUzNS0x'+
			'LjE5Ni0xLjE5Ni0xLjE5NmgtMC4yNDJjLTAuNjYxLDAtMS4xOTcsMC41MzYtMS4xOTcsMS4xOTZTMTguNjI4LDkuMDc2LDE5LjI4OSw5LjA3NnogTTE2LjEyMiw2LjY4NGgtMC4yNDMNCgkJYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2czAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2aDAuMjQzYzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZTMTYuNzgyLDYuNjg0LDE2LjEyMiw2LjY4NHoNCgkJIE0yMi42OTgsOS4wNzZoMC4yNDNjMC42NiwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2cy0wLjUzNi0xLjE5Ni0xLjE5Ni0xLjE5NmgtMC4yNDNjLTAuNjYsMC0xLjE5NiwwLjUzNi'+
			'0xLjE5NiwxLjE5Ng0KCQlTMjIuMDM4LDkuMDc2LDIyLjY5OCw5LjA3NnogTTkuMDYsOS4wNzZoMC4yNDJjMC42NiwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2UzkuOTYyLDYuNjg0LDkuMzAyLDYuNjg0SDkuMDYNCgkJYy0wLjY2MSwwLTEuMTk3LDAuNTM2LTEuMTk3LDEuMTk2UzguMzk5LDkuMDc2LDkuMDYsOS4wNzZ6IE0xMi40NjksOS4wNzZoMC4yNDNjMC42NjEsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5Ng0KCQlzLTAuNTM2LTEuMTk2LTEuMTk2LTEuMTk2aC0wLjI0M2MtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NlMxMS44MDgsOS4wNzYsMTIuNDY5LDkuMDc2eiBNMjcuMzA0'+
			'LDExLjExMQ0KCQljLTAuNjYxLDAtMS4xOTYsMC41MzUtMS4xOTYsMS4xOTZ2MC4zMDhjMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAuNjYsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NnYtMC4zMDgNCgkJQzI4LjUsMTEuNjQ2LDI3Ljk2NCwxMS4xMTEsMjcuMzA0LDExLjExMXogTTI3LjMwNCwxNC42NWMtMC42NjEsMC0xLjE5NiwwLjUzNS0xLjE5NiwxLjE5NnYwLjMwOGMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTYNCgkJYzAuNjYsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NnYtMC4zMDhDMjguNSwxNS4xODYsMjcuOTY0LDE0LjY1LDI3LjMwNCwxNC42NXogTTI3LjMwNC'+
			'wyMS43MjhjLTAuNjYxLDAtMS4xOTYsMC41MzUtMS4xOTYsMS4xOTYNCgkJaC0wLjIzNGMtMC42NiwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2YzAsMC42NjEsMC41MzYsMS4xOTYsMS4xOTYsMS4xOTZoMS40MzFjMC4zMTQsMCwwLjYyMy0wLjEyOCwwLjg0Ni0wLjM1MQ0KCQlzMC4zNTEtMC41MywwLjM1MS0wLjg0NnYtMS4xOTZDMjguNSwyMi4yNjQsMjcuOTY0LDIxLjcyOCwyNy4zMDQsMjEuNzI4eiBNMjcuMzA0LDE4LjE4OWMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NnYwLjMwOA0KCQljMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAuNjYsMCwxLjE5Ni0wLjUzNiwx'+
			'LjE5Ni0xLjE5NnYtMC4zMDhDMjguNSwxOC43MjYsMjcuOTY0LDE4LjE4OSwyNy4zMDQsMTguMTg5eiBNMjguMTQ5LDcuMDMzDQoJCWMtMC4yMjMtMC4yMjItMC41MzEtMC4zNS0wLjg0Ni0wLjM1aC0xLjE5NmMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NmMwLDAuNjYxLDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2DQoJCWMwLDAuNjYxLDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NlY3Ljg4QzI4LjUsNy41NjQsMjguMzcyLDcuMjU3LDI4LjE0OSw3LjAzM3ogTTIxLjg2MywxMy4yNjENCgkJbDAuMjIxLTAuMTQ3YzAuNDI4LTAuMjg1LD'+
			'AuNTQyLTAuODYzLDAuMjU3LTEuMjkxYy0wLjI4Ni0wLjQyOC0wLjg2My0wLjU0Mi0xLjI5MS0wLjI1NmwtMC4yMjEsMC4xNDYNCgkJYy0wLjQyNywwLjI4Ni0wLjU0MiwwLjg2My0wLjI1NywxLjI5MWMwLjE4LDAuMjY5LDAuNDc0LDAuNDE0LDAuNzc0LDAuNDE0QzIxLjUyNCwxMy40MTgsMjEuNzA0LDEzLjM2NywyMS44NjMsMTMuMjYxeg0KCQkgTTE5LjMyOSwyMi45MjRoLTAuMjQyYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2YzAsMC42NjEsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMC4yNDJjMC42NjEsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5Ng0KCQlDMjAuNTI1LDIzLjQ2'+
			'LDE5Ljk5LDIyLjkyNCwxOS4zMjksMjIuOTI0eiBNMTguNTg0LDE1LjI2NGMwLjE3OCwwLDAuMzU3LTAuMDUxLDAuNTE3LTAuMTU3bDAuMjIxLTAuMTQ3DQoJCWMwLjQyOC0wLjI4NSwwLjU0Mi0wLjg2MywwLjI1Ny0xLjI5Yy0wLjI4NS0wLjQyOC0wLjg2My0wLjU0Mi0xLjI5MS0wLjI1N2wtMC4yMjIsMC4xNDdjLTAuNDI3LDAuMjg2LTAuNTQyLDAuODYzLTAuMjU2LDEuMjkxDQoJCUMxNy45ODksMTUuMTE5LDE4LjI4MywxNS4yNjQsMTguNTg0LDE1LjI2NHogTTIyLjczOSwyMi45MjRoLTAuMjQyYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2DQoJCWMwLDAuNjYxLDAuNTM1LDEuMT'+
			'k2LDEuMTk2LDEuMTk2aDAuMjQyYzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NkMyMy45MzYsMjMuNDYsMjMuMzk5LDIyLjkyNCwyMi43MzksMjIuOTI0eiBNMjUuMTA0LDkuOTc2DQoJCWMtMC4yODUtMC40MjctMC44NjMtMC41NDItMS4yOTEtMC4yNTZsLTAuMjIxLDAuMTQ3Yy0wLjQyOCwwLjI4NS0wLjU0MiwwLjg2My0wLjI1NiwxLjI5YzAuMTc5LDAuMjY5LDAuNDc0LDAuNDE0LDAuNzc0LDAuNDE0DQoJCWMwLjE3OCwwLDAuMzU3LTAuMDUxLDAuNTE2LTAuMTU2bDAuMjIyLTAuMTQ4QzI1LjI3NCwxMC45ODEsMjUuMzg5LDEwLjQwMywyNS4xMDQsOS45NzZ6Ii8+DQoJPC9nPgoJPGcg'+
			'ZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KCTxwYXRoIGQ9Ik0xNiwxNC44MDRINC42OTdjLTAuMzE1LDAtMC42MjQsMC4xMjgtMC44NDYsMC4zNTFDMy42MjcsMTUuMzc3LDMuNSwxNS42ODYsMy41LDE2djguMTINCgkJYzAsMC4zMTUsMC4xMjcsMC42MjQsMC4zNSwwLjg0NmMwLjIyMywwLjIyNCwwLjUzMSwwLjM1MSwwLjg0NiwwLjM1MUgxNmMwLjMyLDAsMC42Mi0wLjEyNCwwLjg0Ni0wLjM1MQ0KCQljMC4yMjYtMC4yMjYsMC4zNS0wLjUyNS'+
			'wwLjM1LTAuODQ2VjE2YzAtMC4zMTQtMC4xMjgtMC42MjMtMC4zNS0wLjg0NkMxNi42MjMsMTQuOTMyLDE2LjMxNCwxNC44MDQsMTYsMTQuODA0eiBNMTQuODA0LDIyLjkyNA0KCQlINS44OTN2LTUuNzI4aDguOTExVjIyLjkyNHogTTQuNjk3LDEzLjk5OGMwLjY2MSwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2di0wLjMwOGMwLTAuNjYtMC41MzYtMS4xOTUtMS4xOTYtMS4xOTUNCgkJYy0wLjY2MSwwLTEuMTk2LDAuNTM1LTEuMTk2LDEuMTk1djAuMzA4QzMuNSwxMy40NjIsNC4wMzYsMTMuOTk4LDQuNjk3LDEzLjk5OHogTTQuNjk3LDEwLjQ3N2MwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEu'+
			'MTk3aDANCgkJVjkuMDc2YzAuNjYxLDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZjMC0wLjY2LTAuNTM2LTEuMTk2LTEuMTk2LTEuMTk2SDQuNjk3Yy0wLjMxNSwwLTAuNjIzLDAuMTI3LTAuODQ2LDAuMzUNCgkJQzMuNjI4LDcuMjU3LDMuNSw3LjU2NCwzLjUsNy44OHYxLjM5OUMzLjUsOS45NCw0LjAzNiwxMC40NzcsNC42OTcsMTAuNDc3eiBNMTkuMjg5LDkuMDc2aDAuMjQyYzAuNjYxLDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTYNCgkJcy0wLjUzNS0xLjE5Ni0xLjE5Ni0xLjE5NmgtMC4yNDJjLTAuNjYxLDAtMS4xOTcsMC41MzYtMS4xOTcsMS4xOTZTMTguNjI4LDkuMDc2LDE5LjI4OSw5Lj'+
			'A3NnogTTE2LjEyMiw2LjY4NGgtMC4yNDMNCgkJYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2czAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2aDAuMjQzYzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZTMTYuNzgyLDYuNjg0LDE2LjEyMiw2LjY4NHoNCgkJIE0yMi42OTgsOS4wNzZoMC4yNDNjMC42NiwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2cy0wLjUzNi0xLjE5Ni0xLjE5Ni0xLjE5NmgtMC4yNDNjLTAuNjYsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5Ng0KCQlTMjIuMDM4LDkuMDc2LDIyLjY5OCw5LjA3NnogTTkuMDYsOS4wNzZoMC4yNDJjMC42NiwwLDEuMTk2LTAuNTM2'+
			'LDEuMTk2LTEuMTk2UzkuOTYyLDYuNjg0LDkuMzAyLDYuNjg0SDkuMDYNCgkJYy0wLjY2MSwwLTEuMTk3LDAuNTM2LTEuMTk3LDEuMTk2UzguMzk5LDkuMDc2LDkuMDYsOS4wNzZ6IE0xMi40NjksOS4wNzZoMC4yNDNjMC42NjEsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5Ng0KCQlzLTAuNTM2LTEuMTk2LTEuMTk2LTEuMTk2aC0wLjI0M2MtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NlMxMS44MDgsOS4wNzYsMTIuNDY5LDkuMDc2eiBNMjcuMzA0LDExLjExMQ0KCQljLTAuNjYxLDAtMS4xOTYsMC41MzUtMS4xOTYsMS4xOTZ2MC4zMDhjMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMT'+
			'k2YzAuNjYsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NnYtMC4zMDgNCgkJQzI4LjUsMTEuNjQ2LDI3Ljk2NCwxMS4xMTEsMjcuMzA0LDExLjExMXogTTI3LjMwNCwxNC42NWMtMC42NjEsMC0xLjE5NiwwLjUzNS0xLjE5NiwxLjE5NnYwLjMwOGMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTYNCgkJYzAuNjYsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NnYtMC4zMDhDMjguNSwxNS4xODYsMjcuOTY0LDE0LjY1LDI3LjMwNCwxNC42NXogTTI3LjMwNCwyMS43MjhjLTAuNjYxLDAtMS4xOTYsMC41MzUtMS4xOTYsMS4xOTYNCgkJaC0wLjIzNGMtMC42NiwwLTEuMTk2LDAuNTM2LTEuMTk2LDEu'+
			'MTk2YzAsMC42NjEsMC41MzYsMS4xOTYsMS4xOTYsMS4xOTZoMS40MzFjMC4zMTQsMCwwLjYyMy0wLjEyOCwwLjg0Ni0wLjM1MQ0KCQlzMC4zNTEtMC41MywwLjM1MS0wLjg0NnYtMS4xOTZDMjguNSwyMi4yNjQsMjcuOTY0LDIxLjcyOCwyNy4zMDQsMjEuNzI4eiBNMjcuMzA0LDE4LjE4OWMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NnYwLjMwOA0KCQljMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAuNjYsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NnYtMC4zMDhDMjguNSwxOC43MjYsMjcuOTY0LDE4LjE4OSwyNy4zMDQsMTguMTg5eiBNMjguMTQ5LDcuMDMzDQoJCWMtMC'+
			'4yMjMtMC4yMjItMC41MzEtMC4zNS0wLjg0Ni0wLjM1aC0xLjE5NmMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NmMwLDAuNjYxLDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2DQoJCWMwLDAuNjYxLDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NlY3Ljg4QzI4LjUsNy41NjQsMjguMzcyLDcuMjU3LDI4LjE0OSw3LjAzM3ogTTIxLjg2MywxMy4yNjENCgkJbDAuMjIxLTAuMTQ3YzAuNDI4LTAuMjg1LDAuNTQyLTAuODYzLDAuMjU3LTEuMjkxYy0wLjI4Ni0wLjQyOC0wLjg2My0wLjU0Mi0xLjI5MS0wLjI1NmwtMC4yMjEsMC4xNDYNCgkJYy0w'+
			'LjQyNywwLjI4Ni0wLjU0MiwwLjg2My0wLjI1NywxLjI5MWMwLjE4LDAuMjY5LDAuNDc0LDAuNDE0LDAuNzc0LDAuNDE0QzIxLjUyNCwxMy40MTgsMjEuNzA0LDEzLjM2NywyMS44NjMsMTMuMjYxeg0KCQkgTTE5LjMyOSwyMi45MjRoLTAuMjQyYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2YzAsMC42NjEsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMC4yNDJjMC42NjEsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5Ng0KCQlDMjAuNTI1LDIzLjQ2LDE5Ljk5LDIyLjkyNCwxOS4zMjksMjIuOTI0eiBNMTguNTg0LDE1LjI2NGMwLjE3OCwwLDAuMzU3LTAuMDUxLDAuNTE3LTAuMTU3bDAuMj'+
			'IxLTAuMTQ3DQoJCWMwLjQyOC0wLjI4NSwwLjU0Mi0wLjg2MywwLjI1Ny0xLjI5Yy0wLjI4NS0wLjQyOC0wLjg2My0wLjU0Mi0xLjI5MS0wLjI1N2wtMC4yMjIsMC4xNDdjLTAuNDI3LDAuMjg2LTAuNTQyLDAuODYzLTAuMjU2LDEuMjkxDQoJCUMxNy45ODksMTUuMTE5LDE4LjI4MywxNS4yNjQsMTguNTg0LDE1LjI2NHogTTIyLjczOSwyMi45MjRoLTAuMjQyYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2DQoJCWMwLDAuNjYxLDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2aDAuMjQyYzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NkMyMy45MzYsMjMuNDYsMjMuMzk5LDIyLjkyNCwy'+
			'Mi43MzksMjIuOTI0eiBNMjUuMTA0LDkuOTc2DQoJCWMtMC4yODUtMC40MjctMC44NjMtMC41NDItMS4yOTEtMC4yNTZsLTAuMjIxLDAuMTQ3Yy0wLjQyOCwwLjI4NS0wLjU0MiwwLjg2My0wLjI1NiwxLjI5YzAuMTc5LDAuMjY5LDAuNDc0LDAuNDE0LDAuNzc0LDAuNDE0DQoJCWMwLjE3OCwwLDAuMzU3LTAuMDUxLDAuNTE2LTAuMTU2bDAuMjIyLTAuMTQ4QzI1LjI3NCwxMC45ODEsMjUuMzg5LDEwLjQwMywyNS4xMDQsOS45NzZ6Ii8+DQoJPC9nPgo8L3N2Zz4=';
		me._button_image_normalscreen__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;button_image_normalscreen;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_image_normalscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_image_normalscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_normalscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getIsFullscreen() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_image_normalscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_image_normalscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_image_normalscreen.style[domTransition]='';
				if (me._button_image_normalscreen.ggCurrentLogicStateVisible == 0) {
					me._button_image_normalscreen.style.visibility=(Number(me._button_image_normalscreen.style.opacity)>0||!me._button_image_normalscreen.style.opacity)?'inherit':'hidden';
					me._button_image_normalscreen.ggVisible=true;
				}
				else {
					me._button_image_normalscreen.style.visibility="hidden";
					me._button_image_normalscreen.ggVisible=false;
				}
			}
		}
		me._button_image_normalscreen.onmouseover=function (e) {
			me._button_image_normalscreen__img.style.visibility='hidden';
			me._button_image_normalscreen__imgo.style.visibility='inherit';
		}
		me._button_image_normalscreen.onmouseout=function (e) {
			me._button_image_normalscreen__img.style.visibility='inherit';
			me._button_image_normalscreen__imgo.style.visibility='hidden';
		}
		me._button_image_normalscreen.ggUpdatePosition=function (useTransition) {
		}
		me._button_fullscreen.appendChild(me._button_image_normalscreen);
		el=me._button_image_fullscreen=document.createElement('div');
		els=me._button_image_fullscreen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xIEJhc2ljLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLWJhc2ljLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIgoJCQl4PSIwcHgiIH'+
			'k9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSI+Cgk8cGF0aCBkPSJNMjguMTQ5LDcuMDM0Yy0wLjIyMy0wLjIyMy0wLjUzMS0wLjM1MS0wLjg0Ni0wLjM1MUg0LjY5N2MtMC4zMTUsMC0wLjYyNCwwLjEyOC0wLjg0NiwwLjM1MQ0KCQlTMy41LDcuNTY1LDMuNSw3Ljg4djE2LjI0YzAsMC4zMTUsMC4xMjgsMC42MjMsMC4zNTEsMC44NDZjMC4yMjMsMC4yMjQsMC41MzEsMC4zNTEsMC44NDYsMC4zNTFoMjIuNjA3DQoJ'+
			'CWMwLjMxOSwwLDAuNjItMC4xMjQsMC44NDYtMC4zNTFjMC4yMjctMC4yMjYsMC4zNTEtMC41MjYsMC4zNTEtMC44NDZWNy44OEMyOC41LDcuNTY1LDI4LjM3Miw3LjI1NywyOC4xNDksNy4wMzR6IE01Ljg5MywyMi45MjQNCgkJVjkuMDc2aDIwLjIxNXYxMy44NDhINS44OTN6IE0xNiwxOS4yNGMtMC42NjEsMC0xLjE5NywwLjUzNS0xLjE5NywxLjE5NnYwLjQ0OGMwLDAuNjYxLDAuNTM2LDEuMTk2LDEuMTk3LDEuMTk2DQoJCWMwLjY2LDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZ2LTAuNDQ4QzE3LjE5NiwxOS43NzUsMTYuNjYxLDE5LjI0LDE2LDE5LjI0eiBNMTEuNjcsMTQuODA0aC0wLjM0Mg'+
			'0KCQljLTAuNjYxLDAtMS4xOTcsMC41MzUtMS4xOTcsMS4xOTZjMCwwLjY2MSwwLjUzNiwxLjE5NiwxLjE5NywxLjE5NmgwLjM0MmMwLjY2MSwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2DQoJCUMxMi44NjYsMTUuMzM5LDEyLjMzMSwxNC44MDQsMTEuNjcsMTQuODA0eiBNOC4xOTUsMTQuODA0SDcuODU0Yy0wLjY2MSwwLTEuMTk3LDAuNTM1LTEuMTk3LDEuMTk2DQoJCWMwLDAuNjYxLDAuNTM2LDEuMTk2LDEuMTk3LDEuMTk2aDAuMzQxYzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NkM5LjM5MiwxNS4zMzksOC44NTUsMTQuODA0LDguMTk1LDE0LjgwNHogTTE4LjI4NywxMy40MTINCgkJ'+
			'bC0wLjIyMiwwLjE0OGMtMC40MjcsMC4yODUtMC41NDEsMC44NjMtMC4yNTYsMS4yOWMwLjE4LDAuMjY5LDAuNDc0LDAuNDE0LDAuNzc0LDAuNDE0YzAuMTc4LDAsMC4zNTctMC4wNSwwLjUxNy0wLjE1Nw0KCQlsMC4yMjEtMC4xNDhjMC40MjgtMC4yODUsMC41NDItMC44NjMsMC4yNTctMS4yOUMxOS4yOTMsMTMuMjQyLDE4LjcxNSwxMy4xMjYsMTguMjg3LDEzLjQxMnogTTIzLjgxMyw5LjcybC0wLjIyMiwwLjE0Nw0KCQljLTAuNDI3LDAuMjg2LTAuNTQyLDAuODY0LTAuMjU2LDEuMjkxYzAuMTc5LDAuMjY5LDAuNDc0LDAuNDE0LDAuNzc0LDAuNDE0YzAuMTc4LDAsMC4zNTctMC4wNSwwLjUxNy'+
			'0wLjE1N2wwLjIyMS0wLjE0OA0KCQljMC40MjctMC4yODUsMC41NDItMC44NjMsMC4yNTYtMS4yOTFDMjQuODE4LDkuNTQ5LDI0LjI0MSw5LjQzNCwyMy44MTMsOS43MnogTTE2LDE0LjgwNGgtMS4xOTZjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTYNCgkJYzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmMwLDAuNjYxLDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NlYxNg0KCQljMC0wLjMxNS0wLjEyOC0wLjYyMy0wLjM1LTAuODQ2QzE2LjYyMywxNC45MzEsMTYuMzE0LDE0LjgwNCwxNiwxNC44MDR6IE0yMS4wNSwxMS41NjVs'+
			'LTAuMjIxLDAuMTQ4DQoJCWMtMC40MjcsMC4yODYtMC41NDIsMC44NjMtMC4yNTcsMS4yOTFjMC4xOCwwLjI2OCwwLjQ3NSwwLjQxMywwLjc3NCwwLjQxM2MwLjE3OCwwLDAuMzU3LTAuMDUxLDAuNTE3LTAuMTU3bDAuMjIxLTAuMTQ4DQoJCWMwLjQyOC0wLjI4NiwwLjU0Mi0wLjg2MywwLjI1Ny0xLjI5MVMyMS40NzgsMTEuMjgsMjEuMDUsMTEuNTY1eiIvPg0KCTwvZz4KCTxnIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjIiPgoJPHBhdGggZD0iTTI4LjE0OSw3LjAzNGMtMC4yMjMtMC4yMjMtMC41MzEtMC4zNTEtMC44NDYtMC4zNTFINC42OTdjLTAuMz'+
			'E1LDAtMC42MjQsMC4xMjgtMC44NDYsMC4zNTENCgkJUzMuNSw3LjU2NSwzLjUsNy44OHYxNi4yNGMwLDAuMzE1LDAuMTI4LDAuNjIzLDAuMzUxLDAuODQ2YzAuMjIzLDAuMjI0LDAuNTMxLDAuMzUxLDAuODQ2LDAuMzUxaDIyLjYwNw0KCQljMC4zMTksMCwwLjYyLTAuMTI0LDAuODQ2LTAuMzUxYzAuMjI3LTAuMjI2LDAuMzUxLTAuNTI2LDAuMzUxLTAuODQ2VjcuODhDMjguNSw3LjU2NSwyOC4zNzIsNy4yNTcsMjguMTQ5LDcuMDM0eiBNNS44OTMsMjIuOTI0DQoJCVY5LjA3NmgyMC4yMTV2MTMuODQ4SDUuODkzeiBNMTYsMTkuMjRjLTAuNjYxLDAtMS4xOTcsMC41MzUtMS4xOTcsMS4xOTZ2MC40'+
			'NDhjMCwwLjY2MSwwLjUzNiwxLjE5NiwxLjE5NywxLjE5Ng0KCQljMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2di0wLjQ0OEMxNy4xOTYsMTkuNzc1LDE2LjY2MSwxOS4yNCwxNiwxOS4yNHogTTExLjY3LDE0LjgwNGgtMC4zNDINCgkJYy0wLjY2MSwwLTEuMTk3LDAuNTM1LTEuMTk3LDEuMTk2YzAsMC42NjEsMC41MzYsMS4xOTYsMS4xOTcsMS4xOTZoMC4zNDJjMC42NjEsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5Ng0KCQlDMTIuODY2LDE1LjMzOSwxMi4zMzEsMTQuODA0LDExLjY3LDE0LjgwNHogTTguMTk1LDE0LjgwNEg3Ljg1NGMtMC42NjEsMC0xLjE5NywwLjUzNS0xLjE5NywxLj'+
			'E5Ng0KCQljMCwwLjY2MSwwLjUzNiwxLjE5NiwxLjE5NywxLjE5NmgwLjM0MWMwLjY2LDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZDOS4zOTIsMTUuMzM5LDguODU1LDE0LjgwNCw4LjE5NSwxNC44MDR6IE0xOC4yODcsMTMuNDEyDQoJCWwtMC4yMjIsMC4xNDhjLTAuNDI3LDAuMjg1LTAuNTQxLDAuODYzLTAuMjU2LDEuMjljMC4xOCwwLjI2OSwwLjQ3NCwwLjQxNCwwLjc3NCwwLjQxNGMwLjE3OCwwLDAuMzU3LTAuMDUsMC41MTctMC4xNTcNCgkJbDAuMjIxLTAuMTQ4YzAuNDI4LTAuMjg1LDAuNTQyLTAuODYzLDAuMjU3LTEuMjlDMTkuMjkzLDEzLjI0MiwxOC43MTUsMTMuMTI2LDE4LjI4Nywx'+
			'My40MTJ6IE0yMy44MTMsOS43MmwtMC4yMjIsMC4xNDcNCgkJYy0wLjQyNywwLjI4Ni0wLjU0MiwwLjg2NC0wLjI1NiwxLjI5MWMwLjE3OSwwLjI2OSwwLjQ3NCwwLjQxNCwwLjc3NCwwLjQxNGMwLjE3OCwwLDAuMzU3LTAuMDUsMC41MTctMC4xNTdsMC4yMjEtMC4xNDgNCgkJYzAuNDI3LTAuMjg1LDAuNTQyLTAuODYzLDAuMjU2LTEuMjkxQzI0LjgxOCw5LjU0OSwyNC4yNDEsOS40MzQsMjMuODEzLDkuNzJ6IE0xNiwxNC44MDRoLTEuMTk2Yy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2DQoJCWMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZjMCwwLjY2MSwwLjUzNSwxLjE5Ni'+
			'wxLjE5NiwxLjE5NmMwLjY2LDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZWMTYNCgkJYzAtMC4zMTUtMC4xMjgtMC42MjMtMC4zNS0wLjg0NkMxNi42MjMsMTQuOTMxLDE2LjMxNCwxNC44MDQsMTYsMTQuODA0eiBNMjEuMDUsMTEuNTY1bC0wLjIyMSwwLjE0OA0KCQljLTAuNDI3LDAuMjg2LTAuNTQyLDAuODYzLTAuMjU3LDEuMjkxYzAuMTgsMC4yNjgsMC40NzUsMC40MTMsMC43NzQsMC40MTNjMC4xNzgsMCwwLjM1Ny0wLjA1MSwwLjUxNy0wLjE1N2wwLjIyMS0wLjE0OA0KCQljMC40MjgtMC4yODYsMC41NDItMC44NjMsMC4yNTctMS4yOTFTMjEuNDc4LDExLjI4LDIxLjA1LDExLjU2NXoiLz4N'+
			'Cgk8L2c+Cjwvc3ZnPg==';
		me._button_image_fullscreen__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;button_image_fullscreen;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_fullscreen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xIEJhc2ljLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLWJhc2ljLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIgoJCQl4PSIwcHgiIH'+
			'k9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KCTxwYXRoIGQ9Ik0yOC4xNDksNy4wMzRjLTAuMjIzLTAuMjIzLTAuNTMxLTAuMzUxLTAuODQ2LTAuMzUxSDQuNjk3Yy0wLjMxNSwwLTAuNjI0LDAuMTI4LTAuODQ2LDAuMzUxDQoJCVMzLjUsNy41NjUsMy41LDcuODh2MTYuMjRjMCwwLjMxNSwwLjEyOCwwLjYy'+
			'MywwLjM1MSwwLjg0NmMwLjIyMywwLjIyNCwwLjUzMSwwLjM1MSwwLjg0NiwwLjM1MWgyMi42MDcNCgkJYzAuMzE5LDAsMC42Mi0wLjEyNCwwLjg0Ni0wLjM1MWMwLjIyNy0wLjIyNiwwLjM1MS0wLjUyNiwwLjM1MS0wLjg0NlY3Ljg4QzI4LjUsNy41NjUsMjguMzcyLDcuMjU3LDI4LjE0OSw3LjAzNHogTTUuODkzLDIyLjkyNA0KCQlWOS4wNzZoMjAuMjE1djEzLjg0OEg1Ljg5M3ogTTE2LDE5LjI0Yy0wLjY2MSwwLTEuMTk3LDAuNTM1LTEuMTk3LDEuMTk2djAuNDQ4YzAsMC42NjEsMC41MzYsMS4xOTYsMS4xOTcsMS4xOTYNCgkJYzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NnYtMC40ND'+
			'hDMTcuMTk2LDE5Ljc3NSwxNi42NjEsMTkuMjQsMTYsMTkuMjR6IE0xMS42NywxNC44MDRoLTAuMzQyDQoJCWMtMC42NjEsMC0xLjE5NywwLjUzNS0xLjE5NywxLjE5NmMwLDAuNjYxLDAuNTM2LDEuMTk2LDEuMTk3LDEuMTk2aDAuMzQyYzAuNjYxLDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTYNCgkJQzEyLjg2NiwxNS4zMzksMTIuMzMxLDE0LjgwNCwxMS42NywxNC44MDR6IE04LjE5NSwxNC44MDRINy44NTRjLTAuNjYxLDAtMS4xOTcsMC41MzUtMS4xOTcsMS4xOTYNCgkJYzAsMC42NjEsMC41MzYsMS4xOTYsMS4xOTcsMS4xOTZoMC4zNDFjMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2'+
			'QzkuMzkyLDE1LjMzOSw4Ljg1NSwxNC44MDQsOC4xOTUsMTQuODA0eiBNMTguMjg3LDEzLjQxMg0KCQlsLTAuMjIyLDAuMTQ4Yy0wLjQyNywwLjI4NS0wLjU0MSwwLjg2My0wLjI1NiwxLjI5YzAuMTgsMC4yNjksMC40NzQsMC40MTQsMC43NzQsMC40MTRjMC4xNzgsMCwwLjM1Ny0wLjA1LDAuNTE3LTAuMTU3DQoJCWwwLjIyMS0wLjE0OGMwLjQyOC0wLjI4NSwwLjU0Mi0wLjg2MywwLjI1Ny0xLjI5QzE5LjI5MywxMy4yNDIsMTguNzE1LDEzLjEyNiwxOC4yODcsMTMuNDEyeiBNMjMuODEzLDkuNzJsLTAuMjIyLDAuMTQ3DQoJCWMtMC40MjcsMC4yODYtMC41NDIsMC44NjQtMC4yNTYsMS4yOTFjMC'+
			'4xNzksMC4yNjksMC40NzQsMC40MTQsMC43NzQsMC40MTRjMC4xNzgsMCwwLjM1Ny0wLjA1LDAuNTE3LTAuMTU3bDAuMjIxLTAuMTQ4DQoJCWMwLjQyNy0wLjI4NSwwLjU0Mi0wLjg2MywwLjI1Ni0xLjI5MUMyNC44MTgsOS41NDksMjQuMjQxLDkuNDM0LDIzLjgxMyw5LjcyeiBNMTYsMTQuODA0aC0xLjE5NmMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5Ng0KCQljMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAsMC42NjEsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZjMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2VjE2DQoJCWMwLTAuMzE1LTAuMTI4LTAuNjIzLTAuMzUt'+
			'MC44NDZDMTYuNjIzLDE0LjkzMSwxNi4zMTQsMTQuODA0LDE2LDE0LjgwNHogTTIxLjA1LDExLjU2NWwtMC4yMjEsMC4xNDgNCgkJYy0wLjQyNywwLjI4Ni0wLjU0MiwwLjg2My0wLjI1NywxLjI5MWMwLjE4LDAuMjY4LDAuNDc1LDAuNDEzLDAuNzc0LDAuNDEzYzAuMTc4LDAsMC4zNTctMC4wNTEsMC41MTctMC4xNTdsMC4yMjEtMC4xNDgNCgkJYzAuNDI4LTAuMjg2LDAuNTQyLTAuODYzLDAuMjU3LTEuMjkxUzIxLjQ3OCwxMS4yOCwyMS4wNSwxMS41NjV6Ii8+DQoJPC9nPgoJPGcgZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMiIgdHJhbnNmb3JtPSJ0cm'+
			'Fuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KCTxwYXRoIGQ9Ik0yOC4xNDksNy4wMzRjLTAuMjIzLTAuMjIzLTAuNTMxLTAuMzUxLTAuODQ2LTAuMzUxSDQuNjk3Yy0wLjMxNSwwLTAuNjI0LDAuMTI4LTAuODQ2LDAuMzUxDQoJCVMzLjUsNy41NjUsMy41LDcuODh2MTYuMjRjMCwwLjMxNSwwLjEyOCwwLjYyMywwLjM1MSwwLjg0NmMwLjIyMywwLjIyNCwwLjUzMSwwLjM1MSwwLjg0NiwwLjM1MWgyMi42MDcNCgkJYzAuMzE5LDAsMC42Mi0wLjEyNCwwLjg0Ni0wLjM1MWMwLjIyNy0wLjIyNiwwLjM1MS0wLjUyNiwwLjM1MS0wLjg0NlY3Ljg4QzI4LjUsNy41NjUs'+
			'MjguMzcyLDcuMjU3LDI4LjE0OSw3LjAzNHogTTUuODkzLDIyLjkyNA0KCQlWOS4wNzZoMjAuMjE1djEzLjg0OEg1Ljg5M3ogTTE2LDE5LjI0Yy0wLjY2MSwwLTEuMTk3LDAuNTM1LTEuMTk3LDEuMTk2djAuNDQ4YzAsMC42NjEsMC41MzYsMS4xOTYsMS4xOTcsMS4xOTYNCgkJYzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NnYtMC40NDhDMTcuMTk2LDE5Ljc3NSwxNi42NjEsMTkuMjQsMTYsMTkuMjR6IE0xMS42NywxNC44MDRoLTAuMzQyDQoJCWMtMC42NjEsMC0xLjE5NywwLjUzNS0xLjE5NywxLjE5NmMwLDAuNjYxLDAuNTM2LDEuMTk2LDEuMTk3LDEuMTk2aDAuMzQyYzAuNjYxLDAsMS'+
			'4xOTYtMC41MzUsMS4xOTYtMS4xOTYNCgkJQzEyLjg2NiwxNS4zMzksMTIuMzMxLDE0LjgwNCwxMS42NywxNC44MDR6IE04LjE5NSwxNC44MDRINy44NTRjLTAuNjYxLDAtMS4xOTcsMC41MzUtMS4xOTcsMS4xOTYNCgkJYzAsMC42NjEsMC41MzYsMS4xOTYsMS4xOTcsMS4xOTZoMC4zNDFjMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2QzkuMzkyLDE1LjMzOSw4Ljg1NSwxNC44MDQsOC4xOTUsMTQuODA0eiBNMTguMjg3LDEzLjQxMg0KCQlsLTAuMjIyLDAuMTQ4Yy0wLjQyNywwLjI4NS0wLjU0MSwwLjg2My0wLjI1NiwxLjI5YzAuMTgsMC4yNjksMC40NzQsMC40MTQsMC43NzQsMC40MTRj'+
			'MC4xNzgsMCwwLjM1Ny0wLjA1LDAuNTE3LTAuMTU3DQoJCWwwLjIyMS0wLjE0OGMwLjQyOC0wLjI4NSwwLjU0Mi0wLjg2MywwLjI1Ny0xLjI5QzE5LjI5MywxMy4yNDIsMTguNzE1LDEzLjEyNiwxOC4yODcsMTMuNDEyeiBNMjMuODEzLDkuNzJsLTAuMjIyLDAuMTQ3DQoJCWMtMC40MjcsMC4yODYtMC41NDIsMC44NjQtMC4yNTYsMS4yOTFjMC4xNzksMC4yNjksMC40NzQsMC40MTQsMC43NzQsMC40MTRjMC4xNzgsMCwwLjM1Ny0wLjA1LDAuNTE3LTAuMTU3bDAuMjIxLTAuMTQ4DQoJCWMwLjQyNy0wLjI4NSwwLjU0Mi0wLjg2MywwLjI1Ni0xLjI5MUMyNC44MTgsOS41NDksMjQuMjQxLDkuNDM0LD'+
			'IzLjgxMyw5LjcyeiBNMTYsMTQuODA0aC0xLjE5NmMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5Ng0KCQljMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAsMC42NjEsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZjMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2VjE2DQoJCWMwLTAuMzE1LTAuMTI4LTAuNjIzLTAuMzUtMC44NDZDMTYuNjIzLDE0LjkzMSwxNi4zMTQsMTQuODA0LDE2LDE0LjgwNHogTTIxLjA1LDExLjU2NWwtMC4yMjEsMC4xNDgNCgkJYy0wLjQyNywwLjI4Ni0wLjU0MiwwLjg2My0wLjI1NywxLjI5MWMwLjE4LDAuMjY4LDAuNDc1LDAuNDEzLDAuNzc0LDAu'+
			'NDEzYzAuMTc4LDAsMC4zNTctMC4wNTEsMC41MTctMC4xNTdsMC4yMjEtMC4xNDgNCgkJYzAuNDI4LTAuMjg2LDAuNTQyLTAuODYzLDAuMjU3LTEuMjkxUzIxLjQ3OCwxMS4yOCwyMS4wNSwxMS41NjV6Ii8+DQoJPC9nPgo8L3N2Zz4=';
		me._button_image_fullscreen__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;button_image_fullscreen;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_image_fullscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_image_fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_fullscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getIsFullscreen() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_image_fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_image_fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_image_fullscreen.style[domTransition]='';
				if (me._button_image_fullscreen.ggCurrentLogicStateVisible == 0) {
					me._button_image_fullscreen.style.visibility="hidden";
					me._button_image_fullscreen.ggVisible=false;
				}
				else {
					me._button_image_fullscreen.style.visibility=(Number(me._button_image_fullscreen.style.opacity)>0||!me._button_image_fullscreen.style.opacity)?'inherit':'hidden';
					me._button_image_fullscreen.ggVisible=true;
				}
			}
		}
		me._button_image_fullscreen.onmouseover=function (e) {
			me._button_image_fullscreen__img.style.visibility='hidden';
			me._button_image_fullscreen__imgo.style.visibility='inherit';
		}
		me._button_image_fullscreen.onmouseout=function (e) {
			me._button_image_fullscreen__img.style.visibility='inherit';
			me._button_image_fullscreen__imgo.style.visibility='hidden';
		}
		me._button_image_fullscreen.ggUpdatePosition=function (useTransition) {
		}
		me._button_fullscreen.appendChild(me._button_image_fullscreen);
		el=me._tt_fullscreen=document.createElement('div');
		els=me._tt_fullscreen__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_fullscreen";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._tt_fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_fullscreen.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_fullscreen.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_fullscreen.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_fullscreen.style[domTransition]='left 0s, top 0s';
				if (me._tt_fullscreen.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_fullscreen.style.top='-25px';
					me._tt_fullscreen.ggUpdatePosition(true);
				}
				else {
					me._tt_fullscreen.ggDx=0;
					me._tt_fullscreen.style.top='32px';
					me._tt_fullscreen.ggUpdatePosition(true);
				}
			}
		}
		me._tt_fullscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['button_fullscreen'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_fullscreen.style[domTransition]='left 0s, top 0s';
				if (me._tt_fullscreen.ggCurrentLogicStateVisible == 0) {
					me._tt_fullscreen.style.visibility=(Number(me._tt_fullscreen.style.opacity)>0||!me._tt_fullscreen.style.opacity)?'inherit':'hidden';
					me._tt_fullscreen.ggVisible=true;
				}
				else {
					me._tt_fullscreen.style.visibility="hidden";
					me._tt_fullscreen.ggVisible=false;
				}
			}
		}
		me._tt_fullscreen.logicBlock_text = function() {
			var newLogicStateText;
			if (
				(player.getIsFullscreen() == false)
			)
			{
				newLogicStateText = 0;
			}
			else if (
				(player.getIsFullscreen() == true)
			)
			{
				newLogicStateText = 1;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._tt_fullscreen.ggCurrentLogicStateText != newLogicStateText) {
				me._tt_fullscreen.ggCurrentLogicStateText = newLogicStateText;
				me._tt_fullscreen.style[domTransition]='left 0s, top 0s';
				if (me._tt_fullscreen.ggCurrentLogicStateText == 0) {
					me._tt_fullscreen.ggText="Enter Fullscreen";
					me._tt_fullscreen__text.innerHTML=me._tt_fullscreen.ggText;
					if (me._tt_fullscreen.ggUpdateText) {
					me._tt_fullscreen.ggUpdateText=function() {
						var hs="Enter Fullscreen";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_fullscreen.ggUpdatePosition) me._tt_fullscreen.ggUpdatePosition();
					}
				}
				else if (me._tt_fullscreen.ggCurrentLogicStateText == 1) {
					me._tt_fullscreen.ggText="Exit Fullscreen";
					me._tt_fullscreen__text.innerHTML=me._tt_fullscreen.ggText;
					if (me._tt_fullscreen.ggUpdateText) {
					me._tt_fullscreen.ggUpdateText=function() {
						var hs="Exit Fullscreen";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_fullscreen.ggUpdatePosition) me._tt_fullscreen.ggUpdatePosition();
					}
				}
				else {
					me._tt_fullscreen.ggText="";
					me._tt_fullscreen__text.innerHTML=me._tt_fullscreen.ggText;
					if (me._tt_fullscreen.ggUpdateText) {
					me._tt_fullscreen.ggUpdateText=function() {
						var hs="";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_fullscreen.ggUpdatePosition) me._tt_fullscreen.ggUpdatePosition();
					}
				}
			}
		}
		me._tt_fullscreen.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._button_fullscreen.appendChild(me._tt_fullscreen);
		me.divSkin.appendChild(me._button_fullscreen);
		el=me._buttons_social=document.createElement('div');
		el.ggId="buttons_social";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 23px;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 102px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._buttons_social.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._buttons_social.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._button_twitter=document.createElement('div');
		els=me._button_twitter__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xIEJhc2ljLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLWJhc2ljLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIgoJCQl4PSIwcHgiIH'+
			'k9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSI+CgkJPHBhdGggZD0iTTMuNSwxNkMzLjUsOS4wOTYsOS4wOTYsMy41LDE2LDMuNWwwLDBjNi45MDMsMCwxMi40OTksNS41OTYsMTIuNSwxMi41bDAsMA0KCQkJYy0wLjAwMSw2LjkwNC01LjU5NywxMi40OTktMTIuNSwxMi41bDAsMEM5LjA5NiwyOC40OTksMy41LDIyLjkwNCwzLjUsMTZMMy41LDE2eiBNOC44NTQsOC44NTMNCgkJCUM3LjAyMiwxMC42ODYsNS44OTQs'+
			'MTMuMjA1LDUuODkzLDE2bDAsMGMwLjAwMSwyLjc5NSwxLjEyOSw1LjMxNCwyLjk2MSw3LjE0N2wwLDBjMS44MzIsMS44Myw0LjM1MiwyLjk1OSw3LjE0NiwyLjk2bDAsMA0KCQkJYzIuNzk1LTAuMDAxLDUuMzE0LTEuMTMsNy4xNDctMi45NmwwLDBjMS44MzEtMS44MzMsMi45NTktNC4zNTMsMi45Ni03LjE0N2wwLDBjLTAuMDAxLTIuNzk1LTEuMTI5LTUuMzE0LTIuOTYtNy4xNDdsMCwwDQoJCQljLTEuODM0LTEuODMxLTQuMzUzLTIuOTYtNy4xNDctMi45NmwwLDBDMTMuMjA1LDUuODkzLDEwLjY4Niw3LjAyMiw4Ljg1NCw4Ljg1M0w4Ljg1NCw4Ljg1M3oiLz4NCgk8L2c+Cgk8ZyBmaWxsPSIjRk'+
			'ZGRkZGIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMC4yIj4KCQk8cGF0aCBkPSJNMy41LDE2QzMuNSw5LjA5Niw5LjA5NiwzLjUsMTYsMy41bDAsMGM2LjkwMywwLDEyLjQ5OSw1LjU5NiwxMi41LDEyLjVsMCwwDQoJCQljLTAuMDAxLDYuOTA0LTUuNTk3LDEyLjQ5OS0xMi41LDEyLjVsMCwwQzkuMDk2LDI4LjQ5OSwzLjUsMjIuOTA0LDMuNSwxNkwzLjUsMTZ6IE04Ljg1NCw4Ljg1Mw0KCQkJQzcuMDIyLDEwLjY4Niw1Ljg5NCwxMy4yMDUsNS44OTMsMTZsMCwwYzAuMDAxLDIuNzk1LDEuMTI5LDUuMzE0LDIuOTYxLDcuMTQ3bDAsMGMxLjgzMiwxLjgzLDQuMzUyLDIuOTU5LDcuMTQ2'+
			'LDIuOTZsMCwwDQoJCQljMi43OTUtMC4wMDEsNS4zMTQtMS4xMyw3LjE0Ny0yLjk2bDAsMGMxLjgzMS0xLjgzMywyLjk1OS00LjM1MywyLjk2LTcuMTQ3bDAsMGMtMC4wMDEtMi43OTUtMS4xMjktNS4zMTQtMi45Ni03LjE0N2wwLDANCgkJCWMtMS44MzQtMS44MzEtNC4zNTMtMi45Ni03LjE0Ny0yLjk2bDAsMEMxMy4yMDUsNS44OTMsMTAuNjg2LDcuMDIyLDguODU0LDguODUzTDguODU0LDguODUzeiIvPg0KCTwvZz4KPC9zdmc+';
		me._button_twitter__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;button_twitter;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_twitter__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xIEJhc2ljLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLWJhc2ljLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIgoJCQl4PSIwcHgiIH'+
			'k9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KCQk8cGF0aCBkPSJNMy41LDE2QzMuNSw5LjA5Niw5LjA5NiwzLjUsMTYsMy41bDAsMGM2LjkwMywwLDEyLjQ5OSw1LjU5NiwxMi41LDEyLjVsMCwwDQoJCQljLTAuMDAxLDYuOTA0LTUuNTk3LDEyLjQ5OS0xMi41LDEyLjVsMCwwQzkuMDk2LDI4LjQ5OSwzLjUs'+
			'MjIuOTA0LDMuNSwxNkwzLjUsMTZ6IE04Ljg1NCw4Ljg1Mw0KCQkJQzcuMDIyLDEwLjY4Niw1Ljg5NCwxMy4yMDUsNS44OTMsMTZsMCwwYzAuMDAxLDIuNzk1LDEuMTI5LDUuMzE0LDIuOTYxLDcuMTQ3bDAsMGMxLjgzMiwxLjgzLDQuMzUyLDIuOTU5LDcuMTQ2LDIuOTZsMCwwDQoJCQljMi43OTUtMC4wMDEsNS4zMTQtMS4xMyw3LjE0Ny0yLjk2bDAsMGMxLjgzMS0xLjgzMywyLjk1OS00LjM1MywyLjk2LTcuMTQ3bDAsMGMtMC4wMDEtMi43OTUtMS4xMjktNS4zMTQtMi45Ni03LjE0N2wwLDANCgkJCWMtMS44MzQtMS44MzEtNC4zNTMtMi45Ni03LjE0Ny0yLjk2bDAsMEMxMy4yMDUsNS44OTMsMT'+
			'AuNjg2LDcuMDIyLDguODU0LDguODUzTDguODU0LDguODUzeiIvPg0KCTwvZz4KCTxnIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSI+CgkJPHBhdGggZD0iTTMuNSwxNkMzLjUsOS4wOTYsOS4wOTYsMy41LDE2LDMuNWwwLDBjNi45MDMsMCwxMi40OTksNS41OTYsMTIuNSwxMi41bDAsMA0KCQkJYy0wLjAwMSw2LjkwNC01LjU5NywxMi40OTktMTIuNSwxMi41bDAsMEM5LjA5NiwyOC40OTksMy41LDIyLjkwNCwzLjUsMTZMMy41LDE2eiBNOC44NTQs'+
			'OC44NTMNCgkJCUM3LjAyMiwxMC42ODYsNS44OTQsMTMuMjA1LDUuODkzLDE2bDAsMGMwLjAwMSwyLjc5NSwxLjEyOSw1LjMxNCwyLjk2MSw3LjE0N2wwLDBjMS44MzIsMS44Myw0LjM1MiwyLjk1OSw3LjE0NiwyLjk2bDAsMA0KCQkJYzIuNzk1LTAuMDAxLDUuMzE0LTEuMTMsNy4xNDctMi45NmwwLDBjMS44MzEtMS44MzMsMi45NTktNC4zNTMsMi45Ni03LjE0N2wwLDBjLTAuMDAxLTIuNzk1LTEuMTI5LTUuMzE0LTIuOTYtNy4xNDdsMCwwDQoJCQljLTEuODM0LTEuODMxLTQuMzUzLTIuOTYtNy4xNDctMi45NmwwLDBDMTMuMjA1LDUuODkzLDEwLjY4Niw3LjAyMiw4Ljg1NCw4Ljg1M0w4Ljg1NC'+
			'w4Ljg1M3oiLz4NCgk8L2c+Cjwvc3ZnPg==';
		me._button_twitter__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;button_twitter;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_twitter";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 70px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_twitter.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_twitter.onclick=function (e) {
			window.open('http://twitter.com/share?url=' + location.href);
		}
		me._button_twitter.onmouseover=function (e) {
			me._button_twitter__img.style.visibility='hidden';
			me._button_twitter__imgo.style.visibility='inherit';
			me.elementMouseOver['button_twitter']=true;
			me._tt_twittre.logicBlock_visible();
		}
		me._button_twitter.onmouseout=function (e) {
			me._button_twitter__img.style.visibility='inherit';
			me._button_twitter__imgo.style.visibility='hidden';
			me.elementMouseOver['button_twitter']=false;
			me._tt_twittre.logicBlock_visible();
		}
		me._button_twitter.ontouchend=function (e) {
			me.elementMouseOver['button_twitter']=false;
			me._tt_twittre.logicBlock_visible();
		}
		me._button_twitter.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_twittre=document.createElement('div');
		els=me._tt_twittre__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_twittre";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Twitter";
		el.appendChild(els);
		me._tt_twittre.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_twittre.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_twittre.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_twittre.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_twittre.style[domTransition]='left 0s, top 0s';
				if (me._tt_twittre.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_twittre.style.top='-25px';
					me._tt_twittre.ggUpdatePosition(true);
				}
				else {
					me._tt_twittre.ggDx=0;
					me._tt_twittre.style.top='32px';
					me._tt_twittre.ggUpdatePosition(true);
				}
			}
		}
		me._tt_twittre.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['button_twitter'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_twittre.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_twittre.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_twittre.style[domTransition]='left 0s, top 0s';
				if (me._tt_twittre.ggCurrentLogicStateVisible == 0) {
					me._tt_twittre.style.visibility=(Number(me._tt_twittre.style.opacity)>0||!me._tt_twittre.style.opacity)?'inherit':'hidden';
					me._tt_twittre.ggVisible=true;
				}
				else {
					me._tt_twittre.style.visibility="hidden";
					me._tt_twittre.ggVisible=false;
				}
			}
		}
		me._tt_twittre.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._button_twitter.appendChild(me._tt_twittre);
		el=me._svg_twitter=document.createElement('div');
		els=me._svg_twitter__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMjYuNjcgOS4zOGMtLjc3OS4zNS0xLjYzLjU4LTIuNTEuNjkuOS0uNTQgMS42LTEuNCAxLjkyLTIuNDItLjg1LjUtMS43OC44Ny0yLjc4IDEuMDYtLjgtLjg1LTEuOTQtMS4zOC0zLjE5LTEuMzgtMi40MiAwLTQuMzc5IDEuOTYtNC4zNzkgNC4zOCAwIC4zNC4wNC42OC4xMSAxLTMuNjQtLjE4LTYuODYtMS45My05LjAyLTQuNTctLjM4LjY1LS41OSAxLjQtLjU5IDIuMiAwIDEuNTIuNzcgMi44NiAxLjk1IDMuNj'+
			'QtLjcyLS4wMi0xLjM5LS4yMi0xLjk4LS41NXYuMDZjMCAyLjEyIDEuNTEgMy44OSAzLjUxIDQuMjktLjM3LjEtLjc1LjE0OS0xLjE1LjE0OS0uMjggMC0uNTYtLjAyOS0uODItLjA4LjU2IDEuNzQgMi4xNyAzIDQuMDkgMy4wNDEtMS41IDEuMTctMy4zOSAxLjg2OS01LjQ0IDEuODY5LS4zNSAwLS43LS4wMi0xLjA0LS4wNiAxLjk0IDEuMjM5IDQuMjQgMS45NyA2LjcxIDEuOTcgOC4wNDkgMCAxMi40NS02LjY3IDEyLjQ1LTEyLjQ1bC0uMDEtLjU3Yy44MzktLjYxOSAxLjU3OS0xLjM4OSAyLjE2OS0yLjI2OXoiLz48L3N2Zz4=';
		me._svg_twitter__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;svg_twitter;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="svg_twitter";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 24px;';
		hs+='left : 4px;';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_twitter.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_twitter.ggUpdatePosition=function (useTransition) {
		}
		me._button_twitter.appendChild(me._svg_twitter);
		me._buttons_social.appendChild(me._button_twitter);
		el=me._button_facebook=document.createElement('div');
		els=me._button_facebook__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xIEJhc2ljLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLWJhc2ljLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIgoJCQl4PSIwcHgiIH'+
			'k9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSI+CgkJPHBhdGggZD0iTTMuNSwxNkMzLjUsOS4wOTYsOS4wOTYsMy41LDE2LDMuNWwwLDBjNi45MDMsMCwxMi40OTksNS41OTYsMTIuNSwxMi41bDAsMA0KCQkJYy0wLjAwMSw2LjkwNC01LjU5NywxMi40OTktMTIuNSwxMi41bDAsMEM5LjA5NiwyOC40OTksMy41LDIyLjkwNCwzLjUsMTZMMy41LDE2eiBNOC44NTQsOC44NTMNCgkJCUM3LjAyMiwxMC42ODYsNS44OTQs'+
			'MTMuMjA1LDUuODkzLDE2bDAsMGMwLjAwMSwyLjc5NSwxLjEyOSw1LjMxNCwyLjk2MSw3LjE0N2wwLDBjMS44MzIsMS44Myw0LjM1MiwyLjk1OSw3LjE0NiwyLjk2bDAsMA0KCQkJYzIuNzk1LTAuMDAxLDUuMzE0LTEuMTMsNy4xNDctMi45NmwwLDBjMS44MzEtMS44MzMsMi45NTktNC4zNTMsMi45Ni03LjE0N2wwLDBjLTAuMDAxLTIuNzk1LTEuMTI5LTUuMzE0LTIuOTYtNy4xNDdsMCwwDQoJCQljLTEuODM0LTEuODMxLTQuMzUzLTIuOTYtNy4xNDctMi45NmwwLDBDMTMuMjA1LDUuODkzLDEwLjY4Niw3LjAyMiw4Ljg1NCw4Ljg1M0w4Ljg1NCw4Ljg1M3oiLz4NCgk8L2c+Cgk8ZyBmaWxsPSIjRk'+
			'ZGRkZGIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMC4yIj4KCQk8cGF0aCBkPSJNMy41LDE2QzMuNSw5LjA5Niw5LjA5NiwzLjUsMTYsMy41bDAsMGM2LjkwMywwLDEyLjQ5OSw1LjU5NiwxMi41LDEyLjVsMCwwDQoJCQljLTAuMDAxLDYuOTA0LTUuNTk3LDEyLjQ5OS0xMi41LDEyLjVsMCwwQzkuMDk2LDI4LjQ5OSwzLjUsMjIuOTA0LDMuNSwxNkwzLjUsMTZ6IE04Ljg1NCw4Ljg1Mw0KCQkJQzcuMDIyLDEwLjY4Niw1Ljg5NCwxMy4yMDUsNS44OTMsMTZsMCwwYzAuMDAxLDIuNzk1LDEuMTI5LDUuMzE0LDIuOTYxLDcuMTQ3bDAsMGMxLjgzMiwxLjgzLDQuMzUyLDIuOTU5LDcuMTQ2'+
			'LDIuOTZsMCwwDQoJCQljMi43OTUtMC4wMDEsNS4zMTQtMS4xMyw3LjE0Ny0yLjk2bDAsMGMxLjgzMS0xLjgzMywyLjk1OS00LjM1MywyLjk2LTcuMTQ3bDAsMGMtMC4wMDEtMi43OTUtMS4xMjktNS4zMTQtMi45Ni03LjE0N2wwLDANCgkJCWMtMS44MzQtMS44MzEtNC4zNTMtMi45Ni03LjE0Ny0yLjk2bDAsMEMxMy4yMDUsNS44OTMsMTAuNjg2LDcuMDIyLDguODU0LDguODUzTDguODU0LDguODUzeiIvPg0KCTwvZz4KPC9zdmc+';
		me._button_facebook__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;button_facebook;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_facebook__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xIEJhc2ljLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLWJhc2ljLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIgoJCQl4PSIwcHgiIH'+
			'k9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KCQk8cGF0aCBkPSJNMy41LDE2QzMuNSw5LjA5Niw5LjA5NiwzLjUsMTYsMy41bDAsMGM2LjkwMywwLDEyLjQ5OSw1LjU5NiwxMi41LDEyLjVsMCwwDQoJCQljLTAuMDAxLDYuOTA0LTUuNTk3LDEyLjQ5OS0xMi41LDEyLjVsMCwwQzkuMDk2LDI4LjQ5OSwzLjUs'+
			'MjIuOTA0LDMuNSwxNkwzLjUsMTZ6IE04Ljg1NCw4Ljg1Mw0KCQkJQzcuMDIyLDEwLjY4Niw1Ljg5NCwxMy4yMDUsNS44OTMsMTZsMCwwYzAuMDAxLDIuNzk1LDEuMTI5LDUuMzE0LDIuOTYxLDcuMTQ3bDAsMGMxLjgzMiwxLjgzLDQuMzUyLDIuOTU5LDcuMTQ2LDIuOTZsMCwwDQoJCQljMi43OTUtMC4wMDEsNS4zMTQtMS4xMyw3LjE0Ny0yLjk2bDAsMGMxLjgzMS0xLjgzMywyLjk1OS00LjM1MywyLjk2LTcuMTQ3bDAsMGMtMC4wMDEtMi43OTUtMS4xMjktNS4zMTQtMi45Ni03LjE0N2wwLDANCgkJCWMtMS44MzQtMS44MzEtNC4zNTMtMi45Ni03LjE0Ny0yLjk2bDAsMEMxMy4yMDUsNS44OTMsMT'+
			'AuNjg2LDcuMDIyLDguODU0LDguODUzTDguODU0LDguODUzeiIvPg0KCTwvZz4KCTxnIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSI+CgkJPHBhdGggZD0iTTMuNSwxNkMzLjUsOS4wOTYsOS4wOTYsMy41LDE2LDMuNWwwLDBjNi45MDMsMCwxMi40OTksNS41OTYsMTIuNSwxMi41bDAsMA0KCQkJYy0wLjAwMSw2LjkwNC01LjU5NywxMi40OTktMTIuNSwxMi41bDAsMEM5LjA5NiwyOC40OTksMy41LDIyLjkwNCwzLjUsMTZMMy41LDE2eiBNOC44NTQs'+
			'OC44NTMNCgkJCUM3LjAyMiwxMC42ODYsNS44OTQsMTMuMjA1LDUuODkzLDE2bDAsMGMwLjAwMSwyLjc5NSwxLjEyOSw1LjMxNCwyLjk2MSw3LjE0N2wwLDBjMS44MzIsMS44Myw0LjM1MiwyLjk1OSw3LjE0NiwyLjk2bDAsMA0KCQkJYzIuNzk1LTAuMDAxLDUuMzE0LTEuMTMsNy4xNDctMi45NmwwLDBjMS44MzEtMS44MzMsMi45NTktNC4zNTMsMi45Ni03LjE0N2wwLDBjLTAuMDAxLTIuNzk1LTEuMTI5LTUuMzE0LTIuOTYtNy4xNDdsMCwwDQoJCQljLTEuODM0LTEuODMxLTQuMzUzLTIuOTYtNy4xNDctMi45NmwwLDBDMTMuMjA1LDUuODkzLDEwLjY4Niw3LjAyMiw4Ljg1NCw4Ljg1M0w4Ljg1NC'+
			'w4Ljg1M3oiLz4NCgk8L2c+Cjwvc3ZnPg==';
		me._button_facebook__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;button_facebook;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_facebook";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 35px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_facebook.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_facebook.onclick=function (e) {
			window.open('https://www.facebook.com/sharer/sharer.php?u=' + location.href);
		}
		me._button_facebook.onmouseover=function (e) {
			me._button_facebook__img.style.visibility='hidden';
			me._button_facebook__imgo.style.visibility='inherit';
			me.elementMouseOver['button_facebook']=true;
			me._tt_facebook.logicBlock_visible();
		}
		me._button_facebook.onmouseout=function (e) {
			me._button_facebook__img.style.visibility='inherit';
			me._button_facebook__imgo.style.visibility='hidden';
			me.elementMouseOver['button_facebook']=false;
			me._tt_facebook.logicBlock_visible();
		}
		me._button_facebook.ontouchend=function (e) {
			me.elementMouseOver['button_facebook']=false;
			me._tt_facebook.logicBlock_visible();
		}
		me._button_facebook.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_facebook=document.createElement('div');
		els=me._tt_facebook__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_facebook";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Facebook";
		el.appendChild(els);
		me._tt_facebook.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_facebook.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_facebook.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_facebook.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_facebook.style[domTransition]='left 0s, top 0s';
				if (me._tt_facebook.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_facebook.style.top='-25px';
					me._tt_facebook.ggUpdatePosition(true);
				}
				else {
					me._tt_facebook.ggDx=0;
					me._tt_facebook.style.top='32px';
					me._tt_facebook.ggUpdatePosition(true);
				}
			}
		}
		me._tt_facebook.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['button_facebook'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_facebook.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_facebook.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_facebook.style[domTransition]='left 0s, top 0s';
				if (me._tt_facebook.ggCurrentLogicStateVisible == 0) {
					me._tt_facebook.style.visibility=(Number(me._tt_facebook.style.opacity)>0||!me._tt_facebook.style.opacity)?'inherit':'hidden';
					me._tt_facebook.ggVisible=true;
				}
				else {
					me._tt_facebook.style.visibility="hidden";
					me._tt_facebook.ggVisible=false;
				}
			}
		}
		me._tt_facebook.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._button_facebook.appendChild(me._tt_facebook);
		el=me._svg_facebook=document.createElement('div');
		els=me._svg_facebook__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMjIuNDM5IDEwLjk1aDR2LTQuOTVoLTRjLTMuMzExIDAtNiAyLjkyLTYgNi41djIuNWgtNHY0Ljk3aDR2MTIuMDNoNXYtMTIuMDNoNXYtNC45N2gtNXYtMi41NWMwLS44Ni41MzItMS41IDEtMS41eiIvPjwvc3ZnPg==';
		me._svg_facebook__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;svg_facebook;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="svg_facebook";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 4px;';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_facebook.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_facebook.ggUpdatePosition=function (useTransition) {
		}
		me._button_facebook.appendChild(me._svg_facebook);
		me._buttons_social.appendChild(me._button_facebook);
		el=me._button_g=document.createElement('div');
		els=me._button_g__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xIEJhc2ljLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLWJhc2ljLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIgoJCQl4PSIwcHgiIH'+
			'k9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSI+CgkJPHBhdGggZD0iTTMuNSwxNkMzLjUsOS4wOTYsOS4wOTYsMy41LDE2LDMuNWwwLDBjNi45MDMsMCwxMi40OTksNS41OTYsMTIuNSwxMi41bDAsMA0KCQkJYy0wLjAwMSw2LjkwNC01LjU5NywxMi40OTktMTIuNSwxMi41bDAsMEM5LjA5NiwyOC40OTksMy41LDIyLjkwNCwzLjUsMTZMMy41LDE2eiBNOC44NTQsOC44NTMNCgkJCUM3LjAyMiwxMC42ODYsNS44OTQs'+
			'MTMuMjA1LDUuODkzLDE2bDAsMGMwLjAwMSwyLjc5NSwxLjEyOSw1LjMxNCwyLjk2MSw3LjE0N2wwLDBjMS44MzIsMS44Myw0LjM1MiwyLjk1OSw3LjE0NiwyLjk2bDAsMA0KCQkJYzIuNzk1LTAuMDAxLDUuMzE0LTEuMTMsNy4xNDctMi45NmwwLDBjMS44MzEtMS44MzMsMi45NTktNC4zNTMsMi45Ni03LjE0N2wwLDBjLTAuMDAxLTIuNzk1LTEuMTI5LTUuMzE0LTIuOTYtNy4xNDdsMCwwDQoJCQljLTEuODM0LTEuODMxLTQuMzUzLTIuOTYtNy4xNDctMi45NmwwLDBDMTMuMjA1LDUuODkzLDEwLjY4Niw3LjAyMiw4Ljg1NCw4Ljg1M0w4Ljg1NCw4Ljg1M3oiLz4NCgk8L2c+Cgk8ZyBmaWxsPSIjRk'+
			'ZGRkZGIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMC4yIj4KCQk8cGF0aCBkPSJNMy41LDE2QzMuNSw5LjA5Niw5LjA5NiwzLjUsMTYsMy41bDAsMGM2LjkwMywwLDEyLjQ5OSw1LjU5NiwxMi41LDEyLjVsMCwwDQoJCQljLTAuMDAxLDYuOTA0LTUuNTk3LDEyLjQ5OS0xMi41LDEyLjVsMCwwQzkuMDk2LDI4LjQ5OSwzLjUsMjIuOTA0LDMuNSwxNkwzLjUsMTZ6IE04Ljg1NCw4Ljg1Mw0KCQkJQzcuMDIyLDEwLjY4Niw1Ljg5NCwxMy4yMDUsNS44OTMsMTZsMCwwYzAuMDAxLDIuNzk1LDEuMTI5LDUuMzE0LDIuOTYxLDcuMTQ3bDAsMGMxLjgzMiwxLjgzLDQuMzUyLDIuOTU5LDcuMTQ2'+
			'LDIuOTZsMCwwDQoJCQljMi43OTUtMC4wMDEsNS4zMTQtMS4xMyw3LjE0Ny0yLjk2bDAsMGMxLjgzMS0xLjgzMywyLjk1OS00LjM1MywyLjk2LTcuMTQ3bDAsMGMtMC4wMDEtMi43OTUtMS4xMjktNS4zMTQtMi45Ni03LjE0N2wwLDANCgkJCWMtMS44MzQtMS44MzEtNC4zNTMtMi45Ni03LjE0Ny0yLjk2bDAsMEMxMy4yMDUsNS44OTMsMTAuNjg2LDcuMDIyLDguODU0LDguODUzTDguODU0LDguODUzeiIvPg0KCTwvZz4KPC9zdmc+';
		me._button_g__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;button_g;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_g__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xIEJhc2ljLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLWJhc2ljLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIgoJCQl4PSIwcHgiIH'+
			'k9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KCQk8cGF0aCBkPSJNMy41LDE2QzMuNSw5LjA5Niw5LjA5NiwzLjUsMTYsMy41bDAsMGM2LjkwMywwLDEyLjQ5OSw1LjU5NiwxMi41LDEyLjVsMCwwDQoJCQljLTAuMDAxLDYuOTA0LTUuNTk3LDEyLjQ5OS0xMi41LDEyLjVsMCwwQzkuMDk2LDI4LjQ5OSwzLjUs'+
			'MjIuOTA0LDMuNSwxNkwzLjUsMTZ6IE04Ljg1NCw4Ljg1Mw0KCQkJQzcuMDIyLDEwLjY4Niw1Ljg5NCwxMy4yMDUsNS44OTMsMTZsMCwwYzAuMDAxLDIuNzk1LDEuMTI5LDUuMzE0LDIuOTYxLDcuMTQ3bDAsMGMxLjgzMiwxLjgzLDQuMzUyLDIuOTU5LDcuMTQ2LDIuOTZsMCwwDQoJCQljMi43OTUtMC4wMDEsNS4zMTQtMS4xMyw3LjE0Ny0yLjk2bDAsMGMxLjgzMS0xLjgzMywyLjk1OS00LjM1MywyLjk2LTcuMTQ3bDAsMGMtMC4wMDEtMi43OTUtMS4xMjktNS4zMTQtMi45Ni03LjE0N2wwLDANCgkJCWMtMS44MzQtMS44MzEtNC4zNTMtMi45Ni03LjE0Ny0yLjk2bDAsMEMxMy4yMDUsNS44OTMsMT'+
			'AuNjg2LDcuMDIyLDguODU0LDguODUzTDguODU0LDguODUzeiIvPg0KCTwvZz4KCTxnIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSI+CgkJPHBhdGggZD0iTTMuNSwxNkMzLjUsOS4wOTYsOS4wOTYsMy41LDE2LDMuNWwwLDBjNi45MDMsMCwxMi40OTksNS41OTYsMTIuNSwxMi41bDAsMA0KCQkJYy0wLjAwMSw2LjkwNC01LjU5NywxMi40OTktMTIuNSwxMi41bDAsMEM5LjA5NiwyOC40OTksMy41LDIyLjkwNCwzLjUsMTZMMy41LDE2eiBNOC44NTQs'+
			'OC44NTMNCgkJCUM3LjAyMiwxMC42ODYsNS44OTQsMTMuMjA1LDUuODkzLDE2bDAsMGMwLjAwMSwyLjc5NSwxLjEyOSw1LjMxNCwyLjk2MSw3LjE0N2wwLDBjMS44MzIsMS44Myw0LjM1MiwyLjk1OSw3LjE0NiwyLjk2bDAsMA0KCQkJYzIuNzk1LTAuMDAxLDUuMzE0LTEuMTMsNy4xNDctMi45NmwwLDBjMS44MzEtMS44MzMsMi45NTktNC4zNTMsMi45Ni03LjE0N2wwLDBjLTAuMDAxLTIuNzk1LTEuMTI5LTUuMzE0LTIuOTYtNy4xNDdsMCwwDQoJCQljLTEuODM0LTEuODMxLTQuMzUzLTIuOTYtNy4xNDctMi45NmwwLDBDMTMuMjA1LDUuODkzLDEwLjY4Niw3LjAyMiw4Ljg1NCw4Ljg1M0w4Ljg1NC'+
			'w4Ljg1M3oiLz4NCgk8L2c+Cjwvc3ZnPg==';
		me._button_g__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;button_g;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_G+";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_g.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_g.onclick=function (e) {
			window.open('https://plusone.google.com/_/+1/confirm?url=' + location.href);
		}
		me._button_g.onmouseover=function (e) {
			me._button_g__img.style.visibility='hidden';
			me._button_g__imgo.style.visibility='inherit';
			me.elementMouseOver['button_g']=true;
			me._tt_google.logicBlock_visible();
		}
		me._button_g.onmouseout=function (e) {
			me._button_g__img.style.visibility='inherit';
			me._button_g__imgo.style.visibility='hidden';
			me.elementMouseOver['button_g']=false;
			me._tt_google.logicBlock_visible();
		}
		me._button_g.ontouchend=function (e) {
			me.elementMouseOver['button_g']=false;
			me._tt_google.logicBlock_visible();
		}
		me._button_g.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_google=document.createElement('div');
		els=me._tt_google__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_google";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Google+";
		el.appendChild(els);
		me._tt_google.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_google.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_google.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_google.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_google.style[domTransition]='left 0s, top 0s';
				if (me._tt_google.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_google.style.top='-25px';
					me._tt_google.ggUpdatePosition(true);
				}
				else {
					me._tt_google.ggDx=0;
					me._tt_google.style.top='32px';
					me._tt_google.ggUpdatePosition(true);
				}
			}
		}
		me._tt_google.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['button_g'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_google.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_google.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_google.style[domTransition]='left 0s, top 0s';
				if (me._tt_google.ggCurrentLogicStateVisible == 0) {
					me._tt_google.style.visibility=(Number(me._tt_google.style.opacity)>0||!me._tt_google.style.opacity)?'inherit':'hidden';
					me._tt_google.ggVisible=true;
				}
				else {
					me._tt_google.style.visibility="hidden";
					me._tt_google.ggVisible=false;
				}
			}
		}
		me._tt_google.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._button_g.appendChild(me._tt_google);
		el=me._svg_google=document.createElement('div');
		els=me._svg_google__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj48ZyBmaWxsPSIjZmZmIj48cGF0aCBkPSJNMTUuMzEgNy41OGMuNTYuNDcgMS43MyAxLjQ0IDEuNzMgMy4zIDAgMS44MS0xLjAzIDIuNjctMi4wNSAzLjQ3LS4zMi4zMi0uNjkuNjYtLjY5IDEuMnMuMzcuODMuNjQgMS4wNWwuODguNjgxYzEuMDgxLjg5OSAyLjA1IDEuNzM5IDIuMDUgMy40MiAwIDIuMy0yLjIzIDQuNjItNi40MyA0LjYyLTMuNTUgMC01LjI2LTEuNjktNS4yNi0zLjUgMC0uODgxLjQ0LTIuMTMxIDEuODgtMi45OCAxLjUyLS45MyAzLj'+
			'U3LTEuMDUgNC42Ny0xLjEyLS4zNC0uNDQxLS43My0uOTEtLjczLTEuNjYxIDAtLjQyLjEyLS42Ni4yNC0uOTUtLjI3LjAyLS41NC4wNS0uNzguMDUtMi41OSAwLTQuMDYtMS45My00LjA2LTMuODQgMC0xLjEyLjUxLTIuMzcgMS41Ny0zLjI4IDEuMzktMS4xNSAzLjA2LTEuMzUgNC4zOC0xLjM1aDUuMDQxbC0xLjU2MS44OC0xLjUyLjAxem0tMS43NCAxMC44NWMtLjItLjAyLS4zMi0uMDItLjU2LS4wMi0uMjIgMC0xLjU0LjA1LTIuNTcuMzktLjU0LjItMi4xLjc4LTIuMSAyLjUyMXMxLjY5IDIuOTc5IDQuMyAyLjk3OWMyLjM1IDAgMy41OS0xLjEyIDMuNTktMi42NC4wMS0xLjI0LS44LTEuOTEt'+
			'Mi42Ni0zLjIzbS43MS00LjY0Yy41Ni0uNTYuNjEtMS4zNS42MS0xLjc5IDAtMS43Ni0xLjA1LTQuNS0zLjA4LTQuNS0uNjQgMC0xLjMyLjMyLTEuNzEuODEtLjQxLjUyLS41NCAxLjE3LS41NCAxLjgxIDAgMS42NC45NSA0LjM1IDMuMDYgNC4zNS42MSAwIDEuMjctLjI5IDEuNjYtLjY4Ii8+PHBhdGggZD0iTTI3Ljc0IDEwLjMxaC0zLjcydi0zLjcxaC0uOTJ2My43MWgtMy43MnYuOTNoMy43MnYzLjcxaC45MnYtMy43MWgzLjcyeiIvPjwvZz48L3N2Zz4=';
		me._svg_google__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;svg_google;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="svg_google";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 6px;';
		hs+='position : absolute;';
		hs+='top : 6px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_google.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_google.ggUpdatePosition=function (useTransition) {
		}
		me._button_g.appendChild(me._svg_google);
		me._buttons_social.appendChild(me._button_g);
		me.divSkin.appendChild(me._buttons_social);
		el=me._information=document.createElement('div');
		el.ggId="information";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 300px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 500px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._information.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._information.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(player.getVariableValue('vis_info_popup') == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._information.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._information.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._information.style[domTransition]='opacity 1000ms ease 0ms';
				if (me._information.ggCurrentLogicStateAlpha == 0) {
					me._information.style.visibility=me._information.ggVisible?'inherit':'hidden';
					me._information.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._information.style.opacity == 0.0) { me._information.style.visibility="hidden"; } }, 1005);
					me._information.style.opacity=0;
				}
			}
		}
		me._information.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._info_text_body=document.createElement('div');
		els=me._info_text_body__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_text_body";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 300px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 500px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 500px;';
		hs+='height: 300px;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.980392);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 15px 16px 15px 16px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._info_text_body.ggUpdateText=function() {
			var hs=player.hotspot.description;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_text_body.ggUpdateText();
		player.addListener('changenode', function() {
			me._info_text_body.ggUpdateText();
		});
		el.appendChild(els);
		me._info_text_body.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_text_body.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._information.appendChild(me._info_text_body);
		el=me._info_title=document.createElement('div');
		els=me._info_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -27px;';
		hs+='visibility : inherit;';
		hs+='width : 500px;';
		hs+='pointer-events:auto;';
		hs+='font-weight: bold;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 500px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._info_title.ggUpdateText=function() {
			var hs=player.hotspot.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._info_title.ggUpdateText();
		});
		el.appendChild(els);
		me._info_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_title.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._information.appendChild(me._info_title);
		el=me._info_close=document.createElement('div');
		els=me._info_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4wLjIsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OT'+
			'kveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIG9wYWNpdHk9IjAuNCI+DQoJPHBhdGggc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTIxLjEzMiwxOS40MzlMMTcuNjkyLDE2bDMuNDQtMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNSwwLTEuNjkzDQoJCWMtMC40NjctMC40NjctMS4yMjUtMC40NjctMS42OTEsMC4wMDFMMTYsMTQuMzA4bC0zLjQ0MS0zLjQ0MWMtMC40NjctMC40'+
			'NjctMS4yMjQtMC40NjctMS42OTEsMC4wMDENCgkJYy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNCwwLDEuNjlMMTQuMzA5LDE2bC0zLjQ0LDMuNDRjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI2LDAsMS42OTJjMC40NjcsMC40NjcsMS4yMjYsMC40NjcsMS42OTIsMA0KCQlsMy40NC0zLjQ0bDMuNDM5LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI1LDAuNDY4LDEuNjkxLDAuMDAxQzIxLjU5OSwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MQ0KCQljLTQuODgyLTQuODgyLTEyLjc5Ni00Ljg4Mi0xNy42NzgsMGMtNC44ODEsNC44ODEtNC44ODEsMTIuNzk1LDAsMTcuNj'+
			'c4YzQuODgxLDQuODgsMTIuNzk2LDQuODgsMTcuNjc4LDANCgkJQzI5LjcyLDE5Ljk1NiwyOS43MiwxMi4wNDIsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU4OS0wLjAwMS01LjE3LTAuOTg1LTcuMTQ2LTIuOTYxUzUuODk1LDE4LjU5LDUuODk0LDE2DQoJCWMwLTIuNTkxLDAuOTg0LTUuMTcsMi45Ni03LjE0N0MxMC44Myw2Ljg3OCwxMy40MDksNS44OTQsMTYsNS44OTRjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OQ0KCQljMS45NzYsMS45NzcsMi45NTcsNC41NTYsMi45Niw3LjE0N2MtMC4wMDEsMi41OTEtMC45ODUsNS4xNjktMi45Niw3LjE0OEMyMS4xNjksMjUuMTIy'+
			'LDE4LjU5MSwyNi4xMDYsMTYsMjYuMTA2eiIvPg0KPC9nPg0KPGc+DQoJPHBhdGggZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMiIgZD0iTTIxLjEzMiwxOS40MzlMMTcuNjkyLDE2bDMuNDQtMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNSwwLTEuNjkzDQoJCWMtMC40NjctMC40NjctMS4yMjUtMC40NjctMS42OTEsMC4wMDFMMTYsMTQuMzA4bC0zLjQ0MS0zLjQ0MWMtMC40NjctMC40NjctMS4yMjQtMC40NjctMS42OTEsMC4wMDENCgkJYy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNCwwLDEuNjlMMTQuMzA5LDE2bC0zLjQ0LDMuNDRjLTAuNDY3LDAuND'+
			'Y3LTAuNDY3LDEuMjI2LDAsMS42OTJjMC40NjcsMC40NjcsMS4yMjYsMC40NjcsMS42OTIsMA0KCQlsMy40NC0zLjQ0bDMuNDM5LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI1LDAuNDY4LDEuNjkxLDAuMDAxQzIxLjU5OSwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MQ0KCQljLTQuODgyLTQuODgyLTEyLjc5Ni00Ljg4Mi0xNy42NzgsMGMtNC44ODEsNC44ODEtNC44ODEsMTIuNzk1LDAsMTcuNjc4YzQuODgxLDQuODgsMTIuNzk2LDQuODgsMTcuNjc4LDANCgkJQzI5LjcyLDE5Ljk1NiwyOS43MiwxMi4wNDIsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU4'+
			'OS0wLjAwMS01LjE3LTAuOTg1LTcuMTQ2LTIuOTYxUzUuODk1LDE4LjU5LDUuODk0LDE2DQoJCWMwLTIuNTkxLDAuOTg0LTUuMTcsMi45Ni03LjE0N0MxMC44Myw2Ljg3OCwxMy40MDksNS44OTQsMTYsNS44OTRjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OQ0KCQljMS45NzYsMS45NzcsMi45NTcsNC41NTYsMi45Niw3LjE0N2MtMC4wMDEsMi41OTEtMC45ODUsNS4xNjktMi45Niw3LjE0OEMyMS4xNjksMjUuMTIyLDE4LjU5MSwyNi4xMDYsMTYsMjYuMTA2eiIvPg0KPC9nPg0KPC9zdmc+DQo=';
		me._info_close__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;info_close;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._info_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4wLjIsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OT'+
			'kveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgb3BhY2l0eT0iMC40Ij4NCgk8cGF0aCBzdHJva2U9IiMzQzNDM0MiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMjEuMTMyLDE5LjQzOUwxNy42OTMsMTZsMy40MzktMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNiwwLjAwMS0xLjY5Mw0KCQljLTAuNDY3'+
			'LTAuNDY3LTEuMjI1LTAuNDY3LTEuNjkyLDAuMDAxbC0zLjQ0LDMuNDRsLTMuNDQxLTMuNDQxYy0wLjQ2OC0wLjQ2OC0xLjIyNS0wLjQ2Ny0xLjY5MywwDQoJCWMtMC40NjcsMC40NjctMC40NjcsMS4yMjUsMCwxLjY5MkwxNC4zMDksMTZsLTMuNDQsMy40NGMtMC40NjcsMC40NjYtMC40NjcsMS4yMjQsMCwxLjY5MWMwLjQ2NywwLjQ2NywxLjIyNiwwLjQ2NywxLjY5MiwwLjAwMQ0KCQlsMy40NC0zLjQ0bDMuNDQsMy40MzljMC40NjgsMC40NjgsMS4yMjQsMC40NjcsMS42OTEsMEMyMS41OTgsMjAuNjY0LDIxLjYsMTkuOTA3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjENCgkJYy00Ljg4Mi'+
			'00Ljg4Mi0xMi43OTYtNC44ODItMTcuNjc4LDBjLTQuODgxLDQuODgxLTQuODgxLDEyLjc5NiwwLDE3LjY3OGM0Ljg4Miw0Ljg4MSwxMi43OTYsNC44ODEsMTcuNjc4LDANCgkJQzI5LjcyLDE5Ljk1NywyOS43MjEsMTIuMDQzLDI0LjgzOSw3LjE2MXogTTE2LDI2LjEwNmMtMi41OSwwLTUuMTcxLTAuOTg0LTcuMTQ2LTIuOTU5QzYuODc4LDIxLjE3LDUuODk1LDE4LjU5MSw1Ljg5NCwxNg0KCQljMC0yLjU5MSwwLjk4My01LjE3LDIuOTU5LTcuMTQ3YzEuOTc3LTEuOTc2LDQuNTU2LTIuOTU5LDcuMTQ4LTIuOTZjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OQ0KCQljMS45NzUsMS45'+
			'NzcsMi45NTcsNC41NTYsMi45NTksNy4xNDdjLTAuMDAxLDIuNTkyLTAuOTg0LDUuMTctMi45Niw3LjE0OEMyMS4xNywyNS4xMjMsMTguNTkxLDI2LjEwNywxNiwyNi4xMDZ6Ii8+DQo8L2c+DQo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiPg0KCTxwYXRoIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjIiIGQ9Ik0yMS4xMzIsMTkuNDM5TDE3LjY5MywxNmwzLjQzOS0zLjQ0DQoJCWMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNiwwLjAwMS0xLjY5M2MtMC40NjctMC40NjctMS4yMjUtMC40NjctMS'+
			'42OTIsMC4wMDFsLTMuNDQsMy40NGwtMy40NDEtMy40NDENCgkJYy0wLjQ2OC0wLjQ2OC0xLjIyNS0wLjQ2Ny0xLjY5MywwYy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNSwwLDEuNjkyTDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ni0wLjQ2NywxLjIyNCwwLDEuNjkxDQoJCWMwLjQ2NywwLjQ2NywxLjIyNiwwLjQ2NywxLjY5MiwwLjAwMWwzLjQ0LTMuNDRsMy40NCwzLjQzOWMwLjQ2OCwwLjQ2OCwxLjIyNCwwLjQ2NywxLjY5MSwwDQoJCUMyMS41OTgsMjAuNjY0LDIxLjYsMTkuOTA3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjFjLTQuODgyLTQuODgyLTEyLjc5Ni00Ljg4Mi0x'+
			'Ny42NzgsMGMtNC44ODEsNC44ODEtNC44ODEsMTIuNzk2LDAsMTcuNjc4DQoJCWM0Ljg4Miw0Ljg4MSwxMi43OTYsNC44ODEsMTcuNjc4LDBDMjkuNzIsMTkuOTU3LDI5LjcyMSwxMi4wNDMsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU5LDAtNS4xNzEtMC45ODQtNy4xNDYtMi45NTkNCgkJQzYuODc4LDIxLjE3LDUuODk1LDE4LjU5MSw1Ljg5NCwxNmMwLTIuNTkxLDAuOTgzLTUuMTcsMi45NTktNy4xNDdjMS45NzctMS45NzYsNC41NTYtMi45NTksNy4xNDgtMi45Ng0KCQljMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OWMxLjk3NSwxLjk3NywyLjk1Nyw0LjU1NiwyLjk1OS'+
			'w3LjE0N2MtMC4wMDEsMi41OTItMC45ODQsNS4xNy0yLjk2LDcuMTQ4DQoJCUMyMS4xNywyNS4xMjMsMTguNTkxLDI2LjEwNywxNiwyNi4xMDZ6Ii8+DQo8L2c+DQo8L3N2Zz4NCg==';
		me._info_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;info_close;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="info_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 1px;';
		hs+='top : -2px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._info_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_close.onclick=function (e) {
			player.setVariableValue('vis_info_popup', false);
		}
		me._info_close.onmouseover=function (e) {
			me._info_close__img.style.visibility='hidden';
			me._info_close__imgo.style.visibility='inherit';
		}
		me._info_close.onmouseout=function (e) {
			me._info_close__img.style.visibility='inherit';
			me._info_close__imgo.style.visibility='hidden';
		}
		me._info_close.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._info_close);
		me.divSkin.appendChild(me._information);
		el=me._vehiclehudinfo=document.createElement('div');
		el.ggId="VehicleHudInfo";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 450px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 680px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._vehiclehudinfo.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._vehiclehudinfo.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(player.getIsMobile() == true) && 
				(player.getViewerSize().width / player.getViewerSize().height < 1) && 
				(player.getViewerSize().width <= 414)
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				(player.getIsMobile() == true) && 
				(player.getViewerSize().width / player.getViewerSize().height > 1) && 
				(player.getViewerSize().width <= 736)
			)
			{
				newLogicStateScaling = 1;
			}
			else if (
				(player.getIsMobile() == false) && 
				(player.getViewerSize().width <= 960)
			)
			{
				newLogicStateScaling = 2;
			}
			else if (
				(player.getIsMobile() == true) && 
				(player.getViewerSize().width / player.getViewerSize().height > 1) && 
				(player.getViewerSize().width <= 1024)
			)
			{
				newLogicStateScaling = 3;
			}
			else if (
				(player.getIsMobile() == true) && 
				(player.getViewerSize().width / player.getViewerSize().height < 1) && 
				(player.getViewerSize().width <= 1366)
			)
			{
				newLogicStateScaling = 4;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._vehiclehudinfo.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._vehiclehudinfo.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._vehiclehudinfo.style[domTransition]='' + cssPrefix + 'transform 0s, opacity 1000ms ease 0ms';
				if (me._vehiclehudinfo.ggCurrentLogicStateScaling == 0) {
					me._vehiclehudinfo.ggParameter.sx = 0.6;
					me._vehiclehudinfo.ggParameter.sy = 0.6;
					me._vehiclehudinfo.style[domTransform]=parameterToTransform(me._vehiclehudinfo.ggParameter);
				}
				else if (me._vehiclehudinfo.ggCurrentLogicStateScaling == 1) {
					me._vehiclehudinfo.ggParameter.sx = 0.65;
					me._vehiclehudinfo.ggParameter.sy = 0.65;
					me._vehiclehudinfo.style[domTransform]=parameterToTransform(me._vehiclehudinfo.ggParameter);
				}
				else if (me._vehiclehudinfo.ggCurrentLogicStateScaling == 2) {
					me._vehiclehudinfo.ggParameter.sx = 0.75;
					me._vehiclehudinfo.ggParameter.sy = 0.75;
					me._vehiclehudinfo.style[domTransform]=parameterToTransform(me._vehiclehudinfo.ggParameter);
				}
				else if (me._vehiclehudinfo.ggCurrentLogicStateScaling == 3) {
					me._vehiclehudinfo.ggParameter.sx = 0.75;
					me._vehiclehudinfo.ggParameter.sy = 0.75;
					me._vehiclehudinfo.style[domTransform]=parameterToTransform(me._vehiclehudinfo.ggParameter);
				}
				else if (me._vehiclehudinfo.ggCurrentLogicStateScaling == 4) {
					me._vehiclehudinfo.ggParameter.sx = 0.8;
					me._vehiclehudinfo.ggParameter.sy = 0.8;
					me._vehiclehudinfo.style[domTransform]=parameterToTransform(me._vehiclehudinfo.ggParameter);
				}
				else {
					me._vehiclehudinfo.ggParameter.sx = 1;
					me._vehiclehudinfo.ggParameter.sy = 1;
					me._vehiclehudinfo.style[domTransform]=parameterToTransform(me._vehiclehudinfo.ggParameter);
				}
			}
		}
		me._vehiclehudinfo.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(player.getVariableValue('vis_hud_popup') == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._vehiclehudinfo.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._vehiclehudinfo.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._vehiclehudinfo.style[domTransition]='' + cssPrefix + 'transform 0s, opacity 1000ms ease 0ms';
				if (me._vehiclehudinfo.ggCurrentLogicStateAlpha == 0) {
					me._vehiclehudinfo.style.visibility=me._vehiclehudinfo.ggVisible?'inherit':'hidden';
					me._vehiclehudinfo.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._vehiclehudinfo.style.opacity == 0.0) { me._vehiclehudinfo.style.visibility="hidden"; } }, 1005);
					me._vehiclehudinfo.style.opacity=0;
				}
			}
		}
		me._vehiclehudinfo.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._hood_popup=document.createElement('div');
		els=me._hood_popup__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="hood_PopUP";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 450px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 680px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 680px;';
		hs+='height: 450px;';
		hs+='border: 0px solid #da0000;';
		hs+='border: 0px solid rgba(218,0,0,0.588235);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._hood_popup.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._hood_popup.logicBlock_text = function() {
			var newLogicStateText;
			if (
				(player.getVariableValue('vis_hud_popup') == true)
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._hood_popup.ggCurrentLogicStateText != newLogicStateText) {
				me._hood_popup.ggCurrentLogicStateText = newLogicStateText;
				me._hood_popup.style[domTransition]='';
				if (me._hood_popup.ggCurrentLogicStateText == 0) {
					me._hood_popup.ggText="<iframe src=\"assets\/"+player.getVariableValue('VehicleHudURL')+"\" width=\"100%\" height=\"100%\" frameborder= \"0\" scrolling=\"no\"><\/iframe>";
					me._hood_popup__text.innerHTML=me._hood_popup.ggText;
					if (me._hood_popup.ggUpdateText) {
					me._hood_popup.ggUpdateText=function() {
						var hs="<iframe src=\"assets\/"+player.getVariableValue('VehicleHudURL')+"\" width=\"100%\" height=\"100%\" frameborder= \"0\" scrolling=\"no\"><\/iframe>";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._hood_popup.ggUpdatePosition) me._hood_popup.ggUpdatePosition();
					}
				}
				else {
					me._hood_popup.ggText="";
					me._hood_popup__text.innerHTML=me._hood_popup.ggText;
					if (me._hood_popup.ggUpdateText) {
					me._hood_popup.ggUpdateText=function() {
						var hs="";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._hood_popup.ggUpdatePosition) me._hood_popup.ggUpdatePosition();
					}
				}
			}
		}
		me._hood_popup.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._vehiclehudinfo.appendChild(me._hood_popup);
		el=me._hood_title=document.createElement('div');
		els=me._hood_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="hood_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -26px;';
		hs+='visibility : inherit;';
		hs+='width : 245px;';
		hs+='pointer-events:auto;';
		hs+='font-weight: bold;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 245px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Hood Engine View";
		el.appendChild(els);
		me._hood_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._hood_title.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._vehiclehudinfo.appendChild(me._hood_title);
		el=me._hud_close=document.createElement('div');
		els=me._hud_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiDQoJIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIG'+
			'lkPSJMYXllcl8xXzFfIj4NCgk8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNLTEzNS4zLDM1Ny4zYy0yMS45LTIxLjktNTcuNS0yMS45LTc5LjQsMGMtMjEuOSwyMS45LTIxLjksNTcuNSwwLDc5LjRjMjEuOSwyMS45LDU3LjUsMjEuOSw3OS40LDANCgkJUy0xMTMuNCwzNzkuMi0xMzUuMywzNTcuM3ogTS0xNDUuOCw0MTIuN2MwLjgsMC44LDAuOCwxLjUtMC4xLDIuNGwtMTAuOSwxMC45Yy0wLjQsMC40LTAuOCwwLjUtMS4zLDAuNWMtMC41LDAtMC45LTAuMS0xLjEtMC40DQoJCWwtMTUuOC0xNS44bC0xNS43LDE1LjdjLTAuNCwwLjQtMC44LDAuNS0xLjMsMC41cy0wLjktMC4xLTEuMS0wLjRsLTEx'+
			'LjEtMTEuMWMtMC4zLTAuMy0wLjQtMC42LTAuNC0xLjFjMC0wLjUsMC4xLTAuOSwwLjUtMS4zDQoJCWwxNS43LTE1LjdsLTE1LjgtMTUuOGMtMC4zLTAuMy0wLjQtMC42LTAuNC0xLjFjMC0wLjUsMC4xLTAuOSwwLjUtMS4zbDEwLjktMTAuOWMwLjktMC45LDEuNy0wLjksMi40LTAuMWwxNS44LDE1LjhsMTUuNy0xNS43DQoJCWMwLjktMC45LDEuNy0wLjksMi40LTAuMWwxMS4xLDExLjFjMC44LDAuOCwwLjgsMS41LTAuMSwyLjRsLTE1LjcsMTUuN0wtMTQ1LjgsNDEyLjd6Ii8+DQo8L2c+DQo8ZyBpZD0iTGF5ZXJfMiI+DQoJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNjEuNiwzOTYuOWwxNS'+
			'44LDE1LjhjMC44LDAuOCwwLjgsMS41LTAuMSwyLjRsLTEwLjksMTAuOWMtMC40LDAuNC0wLjgsMC41LTEuMywwLjUNCgkJYy0wLjUsMC0wLjktMC4xLTEuMS0wLjRsLTE1LjgtMTUuOGwtMTUuNywxNS43Yy0wLjQsMC40LTAuOCwwLjUtMS4zLDAuNXMtMC45LTAuMS0xLjEtMC40bC0xMS4xLTExLjFjLTAuMy0wLjMtMC40LTAuNi0wLjQtMS4xDQoJCWMwLTAuNSwwLjEtMC45LDAuNS0xLjNsMTUuNy0xNS43bC0xNS44LTE1LjhjLTAuMy0wLjMtMC40LTAuNi0wLjQtMS4xYzAtMC41LDAuMS0wLjksMC41LTEuM2wxMC45LTEwLjljMC45LTAuOSwxLjctMC45LDIuNC0wLjENCgkJbDE1LjgsMTUuOGwx'+
			'NS43LTE1LjdjMC45LTAuOSwxLjctMC45LDIuNC0wLjFsMTEuMSwxMS4xYzAuOCwwLjgsMC44LDEuNS0wLjEsMi40TC0xNjEuNiwzOTYuOXoiLz4NCjwvZz4NCjwvc3ZnPg0K';
		me._hud_close__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;hud_close;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._hud_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiDQoJIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIG'+
			'lkPSJMYXllcl8xXzFfIj4NCgk8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNLTEzMC45LDM1Mi45Yy0yNC40LTI0LjQtNjMuOC0yNC40LTg4LjIsMGMtMjQuNCwyNC40LTI0LjQsNjMuOCwwLDg4LjJjMjQuNCwyNC40LDYzLjgsMjQuNCw4OC4yLDANCgkJUy0xMDYuNSwzNzcuMy0xMzAuOSwzNTIuOXogTS0xNDIuNSw0MTQuNWMwLjgsMC44LDAuOCwxLjctMC4xLDIuN2wtMTIuMiwxMi4yYy0wLjQsMC40LTAuOCwwLjYtMS40LDAuNmMtMC42LDAtMS0wLjEtMS4zLTAuNA0KCQlsLTE3LjUtMTcuNWwtMTcuNCwxNy40Yy0wLjQsMC40LTAuOCwwLjYtMS40LDAuNmMtMC42LDAtMS0wLjEtMS4zLTAuNGwt'+
			'MTIuMy0xMi4zYy0wLjMtMC4zLTAuNC0wLjctMC40LTEuM2MwLTAuNiwwLjEtMSwwLjYtMS40DQoJCWwxNy40LTE3LjRsLTE3LjUtMTcuNWMtMC4zLTAuMy0wLjQtMC43LTAuNC0xLjNjMC0wLjYsMC4xLTEsMC42LTEuNGwxMi4yLTEyLjJjMS0xLDEuOC0xLDIuNy0wLjFsMTcuNSwxNy41bDE3LjQtMTcuNA0KCQljMS0xLDEuOC0xLDIuNy0wLjFsMTIuMywxMi4zYzAuOCwwLjgsMC44LDEuNy0wLjEsMi43bC0xNy40LDE3LjRMLTE0Mi41LDQxNC41eiIvPg0KPC9nPg0KPGcgaWQ9IkxheWVyXzIiPg0KCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTYwLjEsMzk2LjlsMTcuNSwxNy41YzAuOCwwLj'+
			'gsMC44LDEuNy0wLjEsMi43bC0xMi4yLDEyLjJjLTAuNCwwLjQtMC44LDAuNi0xLjQsMC42DQoJCWMtMC42LDAtMS0wLjEtMS4zLTAuNGwtMTcuNS0xNy41bC0xNy40LDE3LjRjLTAuNCwwLjQtMC44LDAuNi0xLjQsMC42Yy0wLjYsMC0xLTAuMS0xLjMtMC40bC0xMi4zLTEyLjNjLTAuMy0wLjMtMC40LTAuNy0wLjQtMS4zDQoJCWMwLTAuNiwwLjEtMSwwLjYtMS40bDE3LjQtMTcuNGwtMTcuNS0xNy41Yy0wLjMtMC4zLTAuNC0wLjctMC40LTEuM2MwLTAuNiwwLjEtMSwwLjYtMS40bDEyLjItMTIuMmMxLTEsMS44LTEsMi43LTAuMWwxNy41LDE3LjUNCgkJbDE3LjQtMTcuNGMxLTEsMS44LTEsMi43'+
			'LTAuMWwxMi4zLDEyLjNjMC44LDAuOCwwLjgsMS43LTAuMSwyLjdMLTE2MC4xLDM5Ni45eiIvPg0KPC9nPg0KPC9zdmc+DQo=';
		me._hud_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;hud_close;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="hud_Close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hud_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._hud_close.onclick=function (e) {
			player.setVariableValue('vis_hud_popup', false);
		}
		me._hud_close.onmouseover=function (e) {
			me._hud_close__img.style.visibility='hidden';
			me._hud_close__imgo.style.visibility='inherit';
		}
		me._hud_close.onmouseout=function (e) {
			me._hud_close__img.style.visibility='inherit';
			me._hud_close__imgo.style.visibility='hidden';
		}
		me._hud_close.ggUpdatePosition=function (useTransition) {
		}
		me._vehiclehudinfo.appendChild(me._hud_close);
		me.divSkin.appendChild(me._vehiclehudinfo);
		el=me._vehiclehood=document.createElement('div');
		el.ggId="VehicleHood";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 186px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._vehiclehood.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._vehiclehood.ggUpdatePosition=function (useTransition) {
		}
		el=me._vehiclel5hood=document.createElement('div');
		el.ggId="VehicleL5Hood";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -90px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._vehiclel5hood.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._vehiclel5hood.onclick=function (e) {
			player.setVariableValue('VehicleHudURL', "index.html#node13");
			player.setVariableValue('VehiclePopTitle', "Fortuner Engine View");
			player.setVariableValue('vis_hud_popup', true);
		}
		me._vehiclel5hood.onmouseover=function (e) {
			me.elementMouseOver['vehiclel5hood']=true;
		}
		me._vehiclel5hood.onmouseout=function (e) {
			me._hoodtt.style[domTransition]='none';
			me._hoodtt.style.opacity='0';
			me._hoodtt.style.visibility='hidden';
			me.elementMouseOver['vehiclel5hood']=false;
		}
		me._vehiclel5hood.ontouchend=function (e) {
			me.elementMouseOver['vehiclel5hood']=false;
		}
		me._vehiclel5hood.ggUpdatePosition=function (useTransition) {
		}
		me._vehiclehood.appendChild(me._vehiclel5hood);
		el=me._vehiclel4hood=document.createElement('div');
		el.ggId="VehicleL4Hood";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -90px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._vehiclel4hood.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._vehiclel4hood.onclick=function (e) {
			player.setVariableValue('VehicleHudURL', "index.html#node11");
			player.setVariableValue('VehiclePopTitle', "HiLux Engine View");
			player.setVariableValue('vis_hud_popup', true);
		}
		me._vehiclel4hood.onmouseover=function (e) {
			me.elementMouseOver['vehiclel4hood']=true;
		}
		me._vehiclel4hood.onmouseout=function (e) {
			me._hoodtt.style[domTransition]='none';
			me._hoodtt.style.opacity='0';
			me._hoodtt.style.visibility='hidden';
			me.elementMouseOver['vehiclel4hood']=false;
		}
		me._vehiclel4hood.ontouchend=function (e) {
			me.elementMouseOver['vehiclel4hood']=false;
		}
		me._vehiclel4hood.ggUpdatePosition=function (useTransition) {
		}
		me._vehiclehood.appendChild(me._vehiclel4hood);
		el=me._vehiclel2hood=document.createElement('div');
		el.ggId="VehicleL2Hood";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -90px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._vehiclel2hood.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._vehiclel2hood.onclick=function (e) {
			player.setVariableValue('VehicleHudURL', "index.html#node9");
			player.setVariableValue('VehiclePopTitle', "HiLux Engine View");
			player.setVariableValue('vis_hud_popup', true);
		}
		me._vehiclel2hood.onmouseover=function (e) {
			me.elementMouseOver['vehiclel2hood']=true;
		}
		me._vehiclel2hood.onmouseout=function (e) {
			me._hoodtt.style[domTransition]='none';
			me._hoodtt.style.opacity='0';
			me._hoodtt.style.visibility='hidden';
			me.elementMouseOver['vehiclel2hood']=false;
		}
		me._vehiclel2hood.ontouchend=function (e) {
			me.elementMouseOver['vehiclel2hood']=false;
		}
		me._vehiclel2hood.ggUpdatePosition=function (useTransition) {
		}
		me._vehiclehood.appendChild(me._vehiclel2hood);
		el=me._vehiclel1hood=document.createElement('div');
		el.ggId="VehicleL1Hood";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -90px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._vehiclel1hood.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._vehiclel1hood.onclick=function (e) {
			player.setVariableValue('VehicleHudURL', "index.html#node5");
			player.setVariableValue('VehiclePopTitle', "Grandia Engine View");
			player.setVariableValue('vis_hud_popup', true);
		}
		me._vehiclel1hood.onmouseover=function (e) {
			me.elementMouseOver['vehiclel1hood']=true;
		}
		me._vehiclel1hood.onmouseout=function (e) {
			me._hoodtt.style[domTransition]='none';
			me._hoodtt.style.opacity='0';
			me._hoodtt.style.visibility='hidden';
			me.elementMouseOver['vehiclel1hood']=false;
		}
		me._vehiclel1hood.ontouchend=function (e) {
			me.elementMouseOver['vehiclel1hood']=false;
		}
		me._vehiclel1hood.ggUpdatePosition=function (useTransition) {
		}
		me._vehiclehood.appendChild(me._vehiclel1hood);
		el=me._vehicler5hood=document.createElement('div');
		el.ggId="VehicleR5Hood";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -90px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._vehicler5hood.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._vehicler5hood.onclick=function (e) {
			player.setVariableValue('VehicleHudURL', "index.html#node27");
			player.setVariableValue('VehiclePopTitle', "Vios Engine View");
			player.setVariableValue('vis_hud_popup', true);
		}
		me._vehicler5hood.onmouseover=function (e) {
			me.elementMouseOver['vehicler5hood']=true;
		}
		me._vehicler5hood.onmouseout=function (e) {
			me._hoodtt.style[domTransition]='none';
			me._hoodtt.style.opacity='0';
			me._hoodtt.style.visibility='hidden';
			me.elementMouseOver['vehicler5hood']=false;
		}
		me._vehicler5hood.ontouchend=function (e) {
			me.elementMouseOver['vehicler5hood']=false;
		}
		me._vehicler5hood.ggUpdatePosition=function (useTransition) {
		}
		me._vehiclehood.appendChild(me._vehicler5hood);
		el=me._vehicler3hood=document.createElement('div');
		el.ggId="VehicleR3Hood";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -90px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._vehicler3hood.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._vehicler3hood.onclick=function (e) {
			player.setVariableValue('VehicleHudURL', "index.html#node25");
			player.setVariableValue('VehiclePopTitle', "Innova Engine View");
			player.setVariableValue('vis_hud_popup', true);
		}
		me._vehicler3hood.onmouseover=function (e) {
			me.elementMouseOver['vehicler3hood']=true;
		}
		me._vehicler3hood.onmouseout=function (e) {
			me._hoodtt.style[domTransition]='none';
			me._hoodtt.style.opacity='0';
			me._hoodtt.style.visibility='hidden';
			me.elementMouseOver['vehicler3hood']=false;
		}
		me._vehicler3hood.ontouchend=function (e) {
			me.elementMouseOver['vehicler3hood']=false;
		}
		me._vehicler3hood.ggUpdatePosition=function (useTransition) {
		}
		me._vehiclehood.appendChild(me._vehicler3hood);
		el=me._vehicler2hood=document.createElement('div');
		el.ggId="VehicleR2Hood";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -90px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._vehicler2hood.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._vehicler2hood.onclick=function (e) {
			player.setVariableValue('VehicleHudURL', "index.html#node22");
			player.setVariableValue('VehiclePopTitle', "Yaris Engine View");
			player.setVariableValue('vis_hud_popup', true);
		}
		me._vehicler2hood.onmouseover=function (e) {
			me.elementMouseOver['vehicler2hood']=true;
		}
		me._vehicler2hood.onmouseout=function (e) {
			me._hoodtt.style[domTransition]='none';
			me._hoodtt.style.opacity='0';
			me._hoodtt.style.visibility='hidden';
			me.elementMouseOver['vehicler2hood']=false;
		}
		me._vehicler2hood.ontouchend=function (e) {
			me.elementMouseOver['vehicler2hood']=false;
		}
		me._vehicler2hood.ggUpdatePosition=function (useTransition) {
		}
		me._vehiclehood.appendChild(me._vehicler2hood);
		el=me._vehicler1hood=document.createElement('div');
		el.ggId="VehicleR1Hood";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -90px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._vehicler1hood.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._vehicler1hood.onclick=function (e) {
			player.setVariableValue('VehicleHudURL', "index.html#node19");
			player.setVariableValue('VehiclePopTitle', "Vios Engine View");
			player.setVariableValue('vis_hud_popup', true);
		}
		me._vehicler1hood.onmouseover=function (e) {
			me.elementMouseOver['vehicler1hood']=true;
		}
		me._vehicler1hood.onmouseout=function (e) {
			me._hoodtt.style[domTransition]='none';
			me._hoodtt.style.opacity='0';
			me._hoodtt.style.visibility='hidden';
			me.elementMouseOver['vehicler1hood']=false;
		}
		me._vehicler1hood.ontouchend=function (e) {
			me.elementMouseOver['vehicler1hood']=false;
		}
		me._vehicler1hood.ggUpdatePosition=function (useTransition) {
		}
		me._vehiclehood.appendChild(me._vehicler1hood);
		el=me._vehicle2hood=document.createElement('div');
		el.ggId="Vehicle2Hood";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -90px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._vehicle2hood.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._vehicle2hood.onclick=function (e) {
			player.setVariableValue('VehicleHudURL', "index.html#node18");
			player.setVariableValue('VehiclePopTitle', "Rush Engine View");
			player.setVariableValue('vis_hud_popup', true);
		}
		me._vehicle2hood.onmouseover=function (e) {
			me.elementMouseOver['vehicle2hood']=true;
		}
		me._vehicle2hood.onmouseout=function (e) {
			me._hoodtt.style[domTransition]='none';
			me._hoodtt.style.opacity='0';
			me._hoodtt.style.visibility='hidden';
			me.elementMouseOver['vehicle2hood']=false;
		}
		me._vehicle2hood.ontouchend=function (e) {
			me.elementMouseOver['vehicle2hood']=false;
		}
		me._vehicle2hood.ggUpdatePosition=function (useTransition) {
		}
		me._vehiclehood.appendChild(me._vehicle2hood);
		el=me._vehicle1hood=document.createElement('div');
		el.ggId="Vehicle1Hood";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -90px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._vehicle1hood.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._vehicle1hood.onclick=function (e) {
			player.setVariableValue('VehicleHudURL', "index.html#node1");
			player.setVariableValue('VehiclePopTitle', "Grandia Engine view");
			player.setVariableValue('vis_hud_popup', true);
		}
		me._vehicle1hood.onmouseover=function (e) {
			me.elementMouseOver['vehicle1hood']=true;
		}
		me._vehicle1hood.onmouseout=function (e) {
			me._hoodtt.style[domTransition]='none';
			me._hoodtt.style.opacity='0';
			me._hoodtt.style.visibility='hidden';
			me.elementMouseOver['vehicle1hood']=false;
		}
		me._vehicle1hood.ontouchend=function (e) {
			me.elementMouseOver['vehicle1hood']=false;
		}
		me._vehicle1hood.ggUpdatePosition=function (useTransition) {
		}
		me._vehiclehood.appendChild(me._vehicle1hood);
		me.divSkin.appendChild(me._vehiclehood);
		el=me._vehicleintinfo=document.createElement('div');
		el.ggId="VehicleIntInfo";
		el.ggDx=4;
		el.ggDy=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 450px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 680px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._vehicleintinfo.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._vehicleintinfo.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(player.getIsMobile() == true) && 
				(player.getViewerSize().width / player.getViewerSize().height < 1) && 
				(player.getViewerSize().width <= 414)
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				(player.getIsMobile() == true) && 
				(player.getViewerSize().width / player.getViewerSize().height > 1) && 
				(player.getViewerSize().width <= 736)
			)
			{
				newLogicStateScaling = 1;
			}
			else if (
				(player.getIsMobile() == false) && 
				(player.getViewerSize().width <= 960)
			)
			{
				newLogicStateScaling = 2;
			}
			else if (
				(player.getIsMobile() == true) && 
				(player.getViewerSize().width / player.getViewerSize().height > 1) && 
				(player.getViewerSize().width <= 1024)
			)
			{
				newLogicStateScaling = 3;
			}
			else if (
				(player.getIsMobile() == true) && 
				(player.getViewerSize().width / player.getViewerSize().height < 1) && 
				(player.getViewerSize().width <= 1366)
			)
			{
				newLogicStateScaling = 4;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._vehicleintinfo.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._vehicleintinfo.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._vehicleintinfo.style[domTransition]='' + cssPrefix + 'transform 0s, opacity 1000ms ease 0ms';
				if (me._vehicleintinfo.ggCurrentLogicStateScaling == 0) {
					me._vehicleintinfo.ggParameter.sx = 0.6;
					me._vehicleintinfo.ggParameter.sy = 0.6;
					me._vehicleintinfo.style[domTransform]=parameterToTransform(me._vehicleintinfo.ggParameter);
				}
				else if (me._vehicleintinfo.ggCurrentLogicStateScaling == 1) {
					me._vehicleintinfo.ggParameter.sx = 0.65;
					me._vehicleintinfo.ggParameter.sy = 0.65;
					me._vehicleintinfo.style[domTransform]=parameterToTransform(me._vehicleintinfo.ggParameter);
				}
				else if (me._vehicleintinfo.ggCurrentLogicStateScaling == 2) {
					me._vehicleintinfo.ggParameter.sx = 0.75;
					me._vehicleintinfo.ggParameter.sy = 0.75;
					me._vehicleintinfo.style[domTransform]=parameterToTransform(me._vehicleintinfo.ggParameter);
				}
				else if (me._vehicleintinfo.ggCurrentLogicStateScaling == 3) {
					me._vehicleintinfo.ggParameter.sx = 0.75;
					me._vehicleintinfo.ggParameter.sy = 0.75;
					me._vehicleintinfo.style[domTransform]=parameterToTransform(me._vehicleintinfo.ggParameter);
				}
				else if (me._vehicleintinfo.ggCurrentLogicStateScaling == 4) {
					me._vehicleintinfo.ggParameter.sx = 0.8;
					me._vehicleintinfo.ggParameter.sy = 0.8;
					me._vehicleintinfo.style[domTransform]=parameterToTransform(me._vehicleintinfo.ggParameter);
				}
				else {
					me._vehicleintinfo.ggParameter.sx = 1;
					me._vehicleintinfo.ggParameter.sy = 1;
					me._vehicleintinfo.style[domTransform]=parameterToTransform(me._vehicleintinfo.ggParameter);
				}
			}
		}
		me._vehicleintinfo.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(player.getVariableValue('vis_intr_popup') == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._vehicleintinfo.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._vehicleintinfo.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._vehicleintinfo.style[domTransition]='' + cssPrefix + 'transform 0s, opacity 1000ms ease 0ms';
				if (me._vehicleintinfo.ggCurrentLogicStateAlpha == 0) {
					me._vehicleintinfo.style.visibility=me._vehicleintinfo.ggVisible?'inherit':'hidden';
					me._vehicleintinfo.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._vehicleintinfo.style.opacity == 0.0) { me._vehicleintinfo.style.visibility="hidden"; } }, 1005);
					me._vehicleintinfo.style.opacity=0;
				}
			}
		}
		me._vehicleintinfo.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._interior_popup=document.createElement('div');
		els=me._interior_popup__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Interior_PopUp";
		el.ggDx=2;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 450px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 680px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 680px;';
		hs+='height: 450px;';
		hs+='border: 0px solid #da0000;';
		hs+='border: 0px solid rgba(218,0,0,0.588235);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._interior_popup.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._interior_popup.logicBlock_text = function() {
			var newLogicStateText;
			if (
				(player.getVariableValue('vis_intr_popup') == true)
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._interior_popup.ggCurrentLogicStateText != newLogicStateText) {
				me._interior_popup.ggCurrentLogicStateText = newLogicStateText;
				me._interior_popup.style[domTransition]='';
				if (me._interior_popup.ggCurrentLogicStateText == 0) {
					me._interior_popup.ggText="<iframe src=\"assets\/"+player.getVariableValue('VehicleIntURL')+"\" width=\"100%\" height=\"100%\" frameborder= \"0\" scrolling=\"no\"><\/iframe>";
					me._interior_popup__text.innerHTML=me._interior_popup.ggText;
					if (me._interior_popup.ggUpdateText) {
					me._interior_popup.ggUpdateText=function() {
						var hs="<iframe src=\"assets\/"+player.getVariableValue('VehicleIntURL')+"\" width=\"100%\" height=\"100%\" frameborder= \"0\" scrolling=\"no\"><\/iframe>";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._interior_popup.ggUpdatePosition) me._interior_popup.ggUpdatePosition();
					}
				}
				else {
					me._interior_popup.ggText="";
					me._interior_popup__text.innerHTML=me._interior_popup.ggText;
					if (me._interior_popup.ggUpdateText) {
					me._interior_popup.ggUpdateText=function() {
						var hs="";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._interior_popup.ggUpdatePosition) me._interior_popup.ggUpdatePosition();
					}
				}
			}
		}
		me._interior_popup.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._vehicleintinfo.appendChild(me._interior_popup);
		el=me._interior_title=document.createElement('div');
		els=me._interior_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="interior_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -26px;';
		hs+='visibility : inherit;';
		hs+='width : 245px;';
		hs+='pointer-events:auto;';
		hs+='font-weight: bold;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 245px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._interior_title.ggUpdateText=function() {
			var hs=player.getVariableValue('VehiclePopTitle');
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._interior_title.ggUpdateText();
		player.addListener('timer', function() {
			me._interior_title.ggUpdateText();
		});
		el.appendChild(els);
		me._interior_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._interior_title.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._vehicleintinfo.appendChild(me._interior_title);
		el=me._intr_close=document.createElement('div');
		els=me._intr_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiDQoJIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIG'+
			'lkPSJMYXllcl8xXzFfIj4NCgk8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNLTEzNS4zLDM1Ny4zYy0yMS45LTIxLjktNTcuNS0yMS45LTc5LjQsMGMtMjEuOSwyMS45LTIxLjksNTcuNSwwLDc5LjRjMjEuOSwyMS45LDU3LjUsMjEuOSw3OS40LDANCgkJUy0xMTMuNCwzNzkuMi0xMzUuMywzNTcuM3ogTS0xNDUuOCw0MTIuN2MwLjgsMC44LDAuOCwxLjUtMC4xLDIuNGwtMTAuOSwxMC45Yy0wLjQsMC40LTAuOCwwLjUtMS4zLDAuNWMtMC41LDAtMC45LTAuMS0xLjEtMC40DQoJCWwtMTUuOC0xNS44bC0xNS43LDE1LjdjLTAuNCwwLjQtMC44LDAuNS0xLjMsMC41cy0wLjktMC4xLTEuMS0wLjRsLTEx'+
			'LjEtMTEuMWMtMC4zLTAuMy0wLjQtMC42LTAuNC0xLjFjMC0wLjUsMC4xLTAuOSwwLjUtMS4zDQoJCWwxNS43LTE1LjdsLTE1LjgtMTUuOGMtMC4zLTAuMy0wLjQtMC42LTAuNC0xLjFjMC0wLjUsMC4xLTAuOSwwLjUtMS4zbDEwLjktMTAuOWMwLjktMC45LDEuNy0wLjksMi40LTAuMWwxNS44LDE1LjhsMTUuNy0xNS43DQoJCWMwLjktMC45LDEuNy0wLjksMi40LTAuMWwxMS4xLDExLjFjMC44LDAuOCwwLjgsMS41LTAuMSwyLjRsLTE1LjcsMTUuN0wtMTQ1LjgsNDEyLjd6Ii8+DQo8L2c+DQo8ZyBpZD0iTGF5ZXJfMiI+DQoJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNjEuNiwzOTYuOWwxNS'+
			'44LDE1LjhjMC44LDAuOCwwLjgsMS41LTAuMSwyLjRsLTEwLjksMTAuOWMtMC40LDAuNC0wLjgsMC41LTEuMywwLjUNCgkJYy0wLjUsMC0wLjktMC4xLTEuMS0wLjRsLTE1LjgtMTUuOGwtMTUuNywxNS43Yy0wLjQsMC40LTAuOCwwLjUtMS4zLDAuNXMtMC45LTAuMS0xLjEtMC40bC0xMS4xLTExLjFjLTAuMy0wLjMtMC40LTAuNi0wLjQtMS4xDQoJCWMwLTAuNSwwLjEtMC45LDAuNS0xLjNsMTUuNy0xNS43bC0xNS44LTE1LjhjLTAuMy0wLjMtMC40LTAuNi0wLjQtMS4xYzAtMC41LDAuMS0wLjksMC41LTEuM2wxMC45LTEwLjljMC45LTAuOSwxLjctMC45LDIuNC0wLjENCgkJbDE1LjgsMTUuOGwx'+
			'NS43LTE1LjdjMC45LTAuOSwxLjctMC45LDIuNC0wLjFsMTEuMSwxMS4xYzAuOCwwLjgsMC44LDEuNS0wLjEsMi40TC0xNjEuNiwzOTYuOXoiLz4NCjwvZz4NCjwvc3ZnPg0K';
		me._intr_close__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;intr_close;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._intr_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiDQoJIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIG'+
			'lkPSJMYXllcl8xXzFfIj4NCgk8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNLTEzMC45LDM1Mi45Yy0yNC40LTI0LjQtNjMuOC0yNC40LTg4LjIsMGMtMjQuNCwyNC40LTI0LjQsNjMuOCwwLDg4LjJjMjQuNCwyNC40LDYzLjgsMjQuNCw4OC4yLDANCgkJUy0xMDYuNSwzNzcuMy0xMzAuOSwzNTIuOXogTS0xNDIuNSw0MTQuNWMwLjgsMC44LDAuOCwxLjctMC4xLDIuN2wtMTIuMiwxMi4yYy0wLjQsMC40LTAuOCwwLjYtMS40LDAuNmMtMC42LDAtMS0wLjEtMS4zLTAuNA0KCQlsLTE3LjUtMTcuNWwtMTcuNCwxNy40Yy0wLjQsMC40LTAuOCwwLjYtMS40LDAuNmMtMC42LDAtMS0wLjEtMS4zLTAuNGwt'+
			'MTIuMy0xMi4zYy0wLjMtMC4zLTAuNC0wLjctMC40LTEuM2MwLTAuNiwwLjEtMSwwLjYtMS40DQoJCWwxNy40LTE3LjRsLTE3LjUtMTcuNWMtMC4zLTAuMy0wLjQtMC43LTAuNC0xLjNjMC0wLjYsMC4xLTEsMC42LTEuNGwxMi4yLTEyLjJjMS0xLDEuOC0xLDIuNy0wLjFsMTcuNSwxNy41bDE3LjQtMTcuNA0KCQljMS0xLDEuOC0xLDIuNy0wLjFsMTIuMywxMi4zYzAuOCwwLjgsMC44LDEuNy0wLjEsMi43bC0xNy40LDE3LjRMLTE0Mi41LDQxNC41eiIvPg0KPC9nPg0KPGcgaWQ9IkxheWVyXzIiPg0KCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTYwLjEsMzk2LjlsMTcuNSwxNy41YzAuOCwwLj'+
			'gsMC44LDEuNy0wLjEsMi43bC0xMi4yLDEyLjJjLTAuNCwwLjQtMC44LDAuNi0xLjQsMC42DQoJCWMtMC42LDAtMS0wLjEtMS4zLTAuNGwtMTcuNS0xNy41bC0xNy40LDE3LjRjLTAuNCwwLjQtMC44LDAuNi0xLjQsMC42Yy0wLjYsMC0xLTAuMS0xLjMtMC40bC0xMi4zLTEyLjNjLTAuMy0wLjMtMC40LTAuNy0wLjQtMS4zDQoJCWMwLTAuNiwwLjEtMSwwLjYtMS40bDE3LjQtMTcuNGwtMTcuNS0xNy41Yy0wLjMtMC4zLTAuNC0wLjctMC40LTEuM2MwLTAuNiwwLjEtMSwwLjYtMS40bDEyLjItMTIuMmMxLTEsMS44LTEsMi43LTAuMWwxNy41LDE3LjUNCgkJbDE3LjQtMTcuNGMxLTEsMS44LTEsMi43'+
			'LTAuMWwxMi4zLDEyLjNjMC44LDAuOCwwLjgsMS43LTAuMSwyLjdMLTE2MC4xLDM5Ni45eiIvPg0KPC9nPg0KPC9zdmc+DQo=';
		me._intr_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;intr_close;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="intr_Close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._intr_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._intr_close.onclick=function (e) {
			player.setVariableValue('vis_intr_popup', false);
		}
		me._intr_close.onmouseover=function (e) {
			me._intr_close__img.style.visibility='hidden';
			me._intr_close__imgo.style.visibility='inherit';
		}
		me._intr_close.onmouseout=function (e) {
			me._intr_close__img.style.visibility='inherit';
			me._intr_close__imgo.style.visibility='hidden';
		}
		me._intr_close.ggUpdatePosition=function (useTransition) {
		}
		me._vehicleintinfo.appendChild(me._intr_close);
		me.divSkin.appendChild(me._vehicleintinfo);
		el=me._vehicleinterior=document.createElement('div');
		el.ggId="VehicleInterior";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 96px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._vehicleinterior.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._vehicleinterior.ggUpdatePosition=function (useTransition) {
		}
		el=me._vehiclel5interior=document.createElement('div');
		el.ggId="VehicleL5Interior";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._vehiclel5interior.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._vehiclel5interior.onclick=function (e) {
			player.setVariableValue('VehicleIntURL', "index.html#node14");
			player.setVariableValue('VehiclePopTitle', "Fortuner Interior View");
			player.setVariableValue('vis_intr_popup', true);
		}
		me._vehiclel5interior.onmouseover=function (e) {
			me.elementMouseOver['vehiclel5interior']=true;
		}
		me._vehiclel5interior.onmouseout=function (e) {
			me._interiortt.style[domTransition]='none';
			me._interiortt.style.opacity='0';
			me._interiortt.style.visibility='hidden';
			me.elementMouseOver['vehiclel5interior']=false;
		}
		me._vehiclel5interior.ontouchend=function (e) {
			me.elementMouseOver['vehiclel5interior']=false;
		}
		me._vehiclel5interior.ggUpdatePosition=function (useTransition) {
		}
		me._vehicleinterior.appendChild(me._vehiclel5interior);
		el=me._vehiclel4interior=document.createElement('div');
		el.ggId="VehicleL4Interior";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._vehiclel4interior.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._vehiclel4interior.onclick=function (e) {
			player.setVariableValue('VehicleIntURL', "index.html#node12");
			player.setVariableValue('VehiclePopTitle', "HiLux Interior View");
			player.setVariableValue('vis_intr_popup', true);
		}
		me._vehiclel4interior.onmouseover=function (e) {
			me.elementMouseOver['vehiclel4interior']=true;
		}
		me._vehiclel4interior.onmouseout=function (e) {
			me._interiortt.style[domTransition]='none';
			me._interiortt.style.opacity='0';
			me._interiortt.style.visibility='hidden';
			me.elementMouseOver['vehiclel4interior']=false;
		}
		me._vehiclel4interior.ontouchend=function (e) {
			me.elementMouseOver['vehiclel4interior']=false;
		}
		me._vehiclel4interior.ggUpdatePosition=function (useTransition) {
		}
		me._vehicleinterior.appendChild(me._vehiclel4interior);
		el=me._vehiclel1interior=document.createElement('div');
		el.ggId="VehicleL1Interior";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._vehiclel1interior.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._vehiclel1interior.onclick=function (e) {
			player.setVariableValue('VehicleIntURL', "index.html#node6");
			player.setVariableValue('VehiclePopTitle', "Grandia Interior View");
			player.setVariableValue('vis_intr_popup', true);
		}
		me._vehiclel1interior.onmouseover=function (e) {
			me.elementMouseOver['vehiclel1interior']=true;
		}
		me._vehiclel1interior.onmouseout=function (e) {
			me._interiortt.style[domTransition]='none';
			me._interiortt.style.opacity='0';
			me._interiortt.style.visibility='hidden';
			me.elementMouseOver['vehiclel1interior']=false;
		}
		me._vehiclel1interior.ontouchend=function (e) {
			me.elementMouseOver['vehiclel1interior']=false;
		}
		me._vehiclel1interior.ggUpdatePosition=function (useTransition) {
		}
		me._vehicleinterior.appendChild(me._vehiclel1interior);
		el=me._vehicler5interior=document.createElement('div');
		el.ggId="VehicleR5Interior";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._vehicler5interior.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._vehicler5interior.onclick=function (e) {
			player.setVariableValue('VehicleIntURL', "index.html#node28");
			player.setVariableValue('VehiclePopTitle', "Vios Interior View");
			player.setVariableValue('vis_intr_popup', true);
		}
		me._vehicler5interior.onmouseover=function (e) {
			me.elementMouseOver['vehicler5interior']=true;
		}
		me._vehicler5interior.onmouseout=function (e) {
			me._interiortt.style[domTransition]='none';
			me._interiortt.style.opacity='0';
			me._interiortt.style.visibility='hidden';
			me.elementMouseOver['vehicler5interior']=false;
		}
		me._vehicler5interior.ontouchend=function (e) {
			me.elementMouseOver['vehicler5interior']=false;
		}
		me._vehicler5interior.ggUpdatePosition=function (useTransition) {
		}
		me._vehicleinterior.appendChild(me._vehicler5interior);
		el=me._vehicler3interior=document.createElement('div');
		el.ggId="VehicleR3Interior";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._vehicler3interior.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._vehicler3interior.onclick=function (e) {
			player.setVariableValue('VehicleIntURL', "index.html#node26");
			player.setVariableValue('VehiclePopTitle', "Innova Interior View");
			player.setVariableValue('vis_intr_popup', true);
		}
		me._vehicler3interior.onmouseover=function (e) {
			me.elementMouseOver['vehicler3interior']=true;
		}
		me._vehicler3interior.onmouseout=function (e) {
			me._interiortt.style[domTransition]='none';
			me._interiortt.style.opacity='0';
			me._interiortt.style.visibility='hidden';
			me.elementMouseOver['vehicler3interior']=false;
		}
		me._vehicler3interior.ontouchend=function (e) {
			me.elementMouseOver['vehicler3interior']=false;
		}
		me._vehicler3interior.ggUpdatePosition=function (useTransition) {
		}
		me._vehicleinterior.appendChild(me._vehicler3interior);
		el=me._vehicler2interior=document.createElement('div');
		el.ggId="VehicleR2Interior";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._vehicler2interior.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._vehicler2interior.onclick=function (e) {
			player.setVariableValue('VehicleIntURL', "index.html#node23");
			player.setVariableValue('VehiclePopTitle', "Yaris Interior View");
			player.setVariableValue('vis_intr_popup', true);
		}
		me._vehicler2interior.onmouseover=function (e) {
			me.elementMouseOver['vehicler2interior']=true;
		}
		me._vehicler2interior.onmouseout=function (e) {
			me._interiortt.style[domTransition]='none';
			me._interiortt.style.opacity='0';
			me._interiortt.style.visibility='hidden';
			me.elementMouseOver['vehicler2interior']=false;
		}
		me._vehicler2interior.ontouchend=function (e) {
			me.elementMouseOver['vehicler2interior']=false;
		}
		me._vehicler2interior.ggUpdatePosition=function (useTransition) {
		}
		me._vehicleinterior.appendChild(me._vehicler2interior);
		el=me._vehicler1interior=document.createElement('div');
		el.ggId="VehicleR1Interior";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._vehicler1interior.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._vehicler1interior.onclick=function (e) {
			player.setVariableValue('VehicleIntURL', "index.html#node20");
			player.setVariableValue('VehiclePopTitle', "Vios Interior View");
			player.setVariableValue('vis_intr_popup', true);
		}
		me._vehicler1interior.onmouseover=function (e) {
			me.elementMouseOver['vehicler1interior']=true;
		}
		me._vehicler1interior.onmouseout=function (e) {
			me._interiortt.style[domTransition]='none';
			me._interiortt.style.opacity='0';
			me._interiortt.style.visibility='hidden';
			me.elementMouseOver['vehicler1interior']=false;
		}
		me._vehicler1interior.ontouchend=function (e) {
			me.elementMouseOver['vehicler1interior']=false;
		}
		me._vehicler1interior.ggUpdatePosition=function (useTransition) {
		}
		me._vehicleinterior.appendChild(me._vehicler1interior);
		el=me._vehicle2interiorside=document.createElement('div');
		el.ggId="Vehicle2InteriorSide";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._vehicle2interiorside.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._vehicle2interiorside.onclick=function (e) {
			player.setVariableValue('VehicleIntURL', "index.html#node17,-97.64,-12.63,102.45,-97.64,-12.63,102.45");
			player.setVariableValue('VehiclePopTitle', "Rush Interior View");
			player.setVariableValue('vis_intr_popup', true);
		}
		me._vehicle2interiorside.onmouseover=function (e) {
			me.elementMouseOver['vehicle2interiorside']=true;
		}
		me._vehicle2interiorside.onmouseout=function (e) {
			me._interiortt.style[domTransition]='none';
			me._interiortt.style.opacity='0';
			me._interiortt.style.visibility='hidden';
			me.elementMouseOver['vehicle2interiorside']=false;
		}
		me._vehicle2interiorside.ontouchend=function (e) {
			me.elementMouseOver['vehicle2interiorside']=false;
		}
		me._vehicle2interiorside.ggUpdatePosition=function (useTransition) {
		}
		me._vehicleinterior.appendChild(me._vehicle2interiorside);
		el=me._vehicle2interior=document.createElement('div');
		el.ggId="Vehicle2Interior";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._vehicle2interior.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._vehicle2interior.onclick=function (e) {
			player.setVariableValue('VehicleIntURL', "index.html#node17");
			player.setVariableValue('VehiclePopTitle', "Rush Interior View");
			player.setVariableValue('vis_intr_popup', true);
		}
		me._vehicle2interior.onmouseover=function (e) {
			me.elementMouseOver['vehicle2interior']=true;
		}
		me._vehicle2interior.onmouseout=function (e) {
			me._interiortt.style[domTransition]='none';
			me._interiortt.style.opacity='0';
			me._interiortt.style.visibility='hidden';
			me.elementMouseOver['vehicle2interior']=false;
		}
		me._vehicle2interior.ontouchend=function (e) {
			me.elementMouseOver['vehicle2interior']=false;
		}
		me._vehicle2interior.ggUpdatePosition=function (useTransition) {
		}
		me._vehicleinterior.appendChild(me._vehicle2interior);
		el=me._vehicle1interior=document.createElement('div');
		el.ggId="Vehicle1Interior";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._vehicle1interior.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._vehicle1interior.onclick=function (e) {
			player.setVariableValue('VehicleIntURL', "index.html#node2");
			player.setVariableValue('VehiclePopTitle', "Grandia Interior View");
			player.setVariableValue('vis_intr_popup', true);
		}
		me._vehicle1interior.onmouseover=function (e) {
			me.elementMouseOver['vehicle1interior']=true;
		}
		me._vehicle1interior.onmouseout=function (e) {
			me._interiortt.style[domTransition]='none';
			me._interiortt.style.opacity='0';
			me._interiortt.style.visibility='hidden';
			me.elementMouseOver['vehicle1interior']=false;
		}
		me._vehicle1interior.ontouchend=function (e) {
			me.elementMouseOver['vehicle1interior']=false;
		}
		me._vehicle1interior.ggUpdatePosition=function (useTransition) {
		}
		me._vehicleinterior.appendChild(me._vehicle1interior);
		me.divSkin.appendChild(me._vehicleinterior);
		el=me._hoodtt=document.createElement('div');
		els=me._hoodtt__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="HoodTT";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -40px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -40px;';
		hs+='visibility : hidden;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Hood - Engine View";
		el.appendChild(els);
		me._hoodtt.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._hoodtt.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getVariableValue('vis_intr_popup') == true) || 
				(player.getVariableValue('vis_hud_popup') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hoodtt.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hoodtt.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hoodtt.style[domTransition]='';
				if (me._hoodtt.ggCurrentLogicStateVisible == 0) {
					me._hoodtt.style.visibility="hidden";
					me._hoodtt.ggVisible=false;
				}
				else {
					me._hoodtt.style.visibility=(Number(me._hoodtt.style.opacity)>0||!me._hoodtt.style.opacity)?'inherit':'hidden';
					me._hoodtt.ggVisible=true;
				}
			}
		}
		me._hoodtt.logicBlock_text = function() {
			var newLogicStateText;
			if (
				(player.getVariableValue('vis_TT_hood') == false)
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._hoodtt.ggCurrentLogicStateText != newLogicStateText) {
				me._hoodtt.ggCurrentLogicStateText = newLogicStateText;
				me._hoodtt.style[domTransition]='';
				if (me._hoodtt.ggCurrentLogicStateText == 0) {
					me._hoodtt.ggText="Hood - Engine View";
					me._hoodtt__text.innerHTML=me._hoodtt.ggText;
					if (me._hoodtt.ggUpdateText) {
					me._hoodtt.ggUpdateText=function() {
						var hs="Hood - Engine View";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._hoodtt.ggUpdatePosition) me._hoodtt.ggUpdatePosition();
					}
				}
				else {
					me._hoodtt.ggText="Hood - Engine View";
					me._hoodtt__text.innerHTML=me._hoodtt.ggText;
					if (me._hoodtt.ggUpdateText) {
					me._hoodtt.ggUpdateText=function() {
						var hs="Hood - Engine View";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._hoodtt.ggUpdatePosition) me._hoodtt.ggUpdatePosition();
					}
				}
			}
		}
		me._hoodtt.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((118-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me.divSkin.appendChild(me._hoodtt);
		el=me._interiortt=document.createElement('div');
		els=me._interiortt__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="InteriorTT";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -40px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -40px;';
		hs+='visibility : hidden;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="InteriorView";
		el.appendChild(els);
		me._interiortt.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._interiortt.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getVariableValue('vis_intr_popup') == true) || 
				(player.getVariableValue('vis_hud_popup') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._interiortt.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._interiortt.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._interiortt.style[domTransition]='';
				if (me._interiortt.ggCurrentLogicStateVisible == 0) {
					me._interiortt.style.visibility="hidden";
					me._interiortt.ggVisible=false;
				}
				else {
					me._interiortt.style.visibility=(Number(me._interiortt.style.opacity)>0||!me._interiortt.style.opacity)?'inherit':'hidden';
					me._interiortt.ggVisible=true;
				}
			}
		}
		me._interiortt.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((118-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me.divSkin.appendChild(me._interiortt);
		el=me._email_box=document.createElement('div');
		el.ggId="email Box";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0,sy:0 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 8px;';
		hs+='border-radius : 8px;';
		hs+='background : rgba(189,189,189,0.666667);';
		hs+='border : 1px solid #ff0000;';
		hs+='cursor : default;';
		hs+='height : 117px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 230px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._email_box.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._email_box.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._emailbutton=document.createElement('div');
		els=me._emailbutton__img=document.createElement('img');
		els.className='ggskin ggskin_emailbutton';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="emailButton";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 199px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._emailbutton.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._emailbutton.onclick=function (e) {
			var flag=me._email_box.ggScaleActive;
			if (player.transitionsDisabled) {
				me._email_box.style[domTransition]='none';
			} else {
				me._email_box.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._email_box.ggParameter.sx=0;me._email_box.ggParameter.sy=0;
				me._email_box.style[domTransform]=parameterToTransform(me._email_box.ggParameter);
			} else {
				me._email_box.ggParameter.sx=0;me._email_box.ggParameter.sy=0;
				me._email_box.style[domTransform]=parameterToTransform(me._email_box.ggParameter);
			}
			me._email_box.ggScaleActive=!flag;
		}
		me._emailbutton.ggUpdatePosition=function (useTransition) {
		}
		me._email_box.appendChild(me._emailbutton);
		el=me._email_button=document.createElement('div');
		els=me._email_button__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="email Button";
		el.ggDx=0;
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 72px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 252px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 252px;';
		hs+='height: 72px;';
		hs+='border: 0px solid #ff0000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="eMail Renee now:<br\/><br\/><a href=\"mailto:tqa.reneeancheta@gmail.com\">tqa.reneeancheta@gmail.com<\/a>";
		el.appendChild(els);
		me._email_button.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._email_button.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._email_box.appendChild(me._email_button);
		me.divSkin.appendChild(me._email_box);
		el=me._text_box=document.createElement('div');
		el.ggId="Text Box";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0,sy:0 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 8px;';
		hs+='border-radius : 8px;';
		hs+='background : rgba(189,189,189,0.666667);';
		hs+='border : 1px solid #ff0000;';
		hs+='cursor : default;';
		hs+='height : 117px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 230px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._text_box.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._text_box.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._txtbutton=document.createElement('div');
		els=me._txtbutton__img=document.createElement('img');
		els.className='ggskin ggskin_txtbutton';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="TxtButton";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 199px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._txtbutton.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._txtbutton.onclick=function (e) {
			var flag=me._text_box.ggScaleActive;
			if (player.transitionsDisabled) {
				me._text_box.style[domTransition]='none';
			} else {
				me._text_box.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._text_box.ggParameter.sx=0;me._text_box.ggParameter.sy=0;
				me._text_box.style[domTransform]=parameterToTransform(me._text_box.ggParameter);
			} else {
				me._text_box.ggParameter.sx=0;me._text_box.ggParameter.sy=0;
				me._text_box.style[domTransform]=parameterToTransform(me._text_box.ggParameter);
			}
			me._text_box.ggScaleActive=!flag;
		}
		me._txtbutton.ggUpdatePosition=function (useTransition) {
		}
		me._text_box.appendChild(me._txtbutton);
		el=me._sms_button=document.createElement('div');
		els=me._sms_button__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="SMS Button";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 72px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 252px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 252px;';
		hs+='height: 72px;';
		hs+='border: 0px solid #ff0000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Text Renee now:<br\/><br\/><a href=\"sms:+639957560103\">Globe: 995.7560103<\/a><br\/><a href=\"sms:+639613593941\">Smart: 961.3593941<\/a>";
		el.appendChild(els);
		me._sms_button.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._sms_button.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._text_box.appendChild(me._sms_button);
		me.divSkin.appendChild(me._text_box);
		el=me._call_box=document.createElement('div');
		el.ggId="Call Box";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0,sy:0 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 8px;';
		hs+='border-radius : 8px;';
		hs+='background : rgba(189,189,189,0.666667);';
		hs+='border : 1px solid #ff0000;';
		hs+='cursor : default;';
		hs+='height : 117px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 230px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._call_box.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._call_box.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._callbutton=document.createElement('div');
		els=me._callbutton__img=document.createElement('img');
		els.className='ggskin ggskin_callbutton';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="CallButton";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 199px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._callbutton.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._callbutton.onclick=function (e) {
			var flag=me._call_box.ggScaleActive;
			if (player.transitionsDisabled) {
				me._call_box.style[domTransition]='none';
			} else {
				me._call_box.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._call_box.ggParameter.sx=0;me._call_box.ggParameter.sy=0;
				me._call_box.style[domTransform]=parameterToTransform(me._call_box.ggParameter);
			} else {
				me._call_box.ggParameter.sx=0;me._call_box.ggParameter.sy=0;
				me._call_box.style[domTransform]=parameterToTransform(me._call_box.ggParameter);
			}
			me._call_box.ggScaleActive=!flag;
		}
		me._callbutton.ggUpdatePosition=function (useTransition) {
		}
		me._call_box.appendChild(me._callbutton);
		el=me._call_button=document.createElement('div');
		els=me._call_button__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Call Button";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 72px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 252px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 252px;';
		hs+='height: 72px;';
		hs+='border: 0px solid #ff0000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Call Renee now:<br\/><br\/><a href=\"tel:+639957560103\">Globe: 995.7560103<\/a><br\/><a href=\"tel:+639613593941\">Smart: 961.3593941<\/a>";
		el.appendChild(els);
		me._call_button.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._call_button.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._call_box.appendChild(me._call_button);
		me.divSkin.appendChild(me._call_box);
		el=me._contact_info=document.createElement('div');
		el.ggId="Contact Info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 75px;';
		hs+='left : 134px;';
		hs+='position : absolute;';
		hs+='top : 13px;';
		hs+='visibility : inherit;';
		hs+='width : 234px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._contact_info.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._contact_info.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getVariableValue('vis_intr_popup') == true) && 
				(player.getIsMobile() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(player.getVariableValue('vis_hud_popup') == true) && 
				(player.getIsMobile() == true)
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._contact_info.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._contact_info.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._contact_info.style[domTransition]='';
				if (me._contact_info.ggCurrentLogicStateVisible == 0) {
					me._contact_info.style.visibility="hidden";
					me._contact_info.ggVisible=false;
				}
				else if (me._contact_info.ggCurrentLogicStateVisible == 1) {
					me._contact_info.style.visibility="hidden";
					me._contact_info.ggVisible=false;
				}
				else {
					me._contact_info.style.visibility=(Number(me._contact_info.style.opacity)>0||!me._contact_info.style.opacity)?'inherit':'hidden';
					me._contact_info.ggVisible=true;
				}
			}
		}
		me._contact_info.ggUpdatePosition=function (useTransition) {
		}
		el=me._button_2=document.createElement('div');
		els=me._button_2__img=document.createElement('img');
		els.className='ggskin ggskin_button_2';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 21px;';
		hs+='left : 7px;';
		hs+='position : absolute;';
		hs+='top : 62px;';
		hs+='visibility : inherit;';
		hs+='width : 21px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_2.onclick=function (e) {
			var flag=me._text_box.ggScaleActive;
			if (player.transitionsDisabled) {
				me._text_box.style[domTransition]='none';
			} else {
				me._text_box.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._text_box.ggParameter.sx=0;me._text_box.ggParameter.sy=0;
				me._text_box.style[domTransform]=parameterToTransform(me._text_box.ggParameter);
			} else {
				me._text_box.ggParameter.sx=1;me._text_box.ggParameter.sy=1;
				me._text_box.style[domTransform]=parameterToTransform(me._text_box.ggParameter);
			}
			me._text_box.ggScaleActive=!flag;
		}
		me._button_2.ggUpdatePosition=function (useTransition) {
		}
		me._contact_info.appendChild(me._button_2);
		el=me._button_3=document.createElement('div');
		els=me._button_3__img=document.createElement('img');
		els.className='ggskin ggskin_button_3';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 19px;';
		hs+='cursor : pointer;';
		hs+='height : 21px;';
		hs+='left : 7px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 21px;';
		hs+='pointer-events:auto;';
		hs+='<a href=\"mailto:webmaster@example.com\">email: Renee.Ancheta@gmail.com<\/a>';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_3.onclick=function (e) {
			var flag=me._email_box.ggScaleActive;
			if (player.transitionsDisabled) {
				me._email_box.style[domTransition]='none';
			} else {
				me._email_box.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._email_box.ggParameter.sx=0;me._email_box.ggParameter.sy=0;
				me._email_box.style[domTransform]=parameterToTransform(me._email_box.ggParameter);
			} else {
				me._email_box.ggParameter.sx=1;me._email_box.ggParameter.sy=1;
				me._email_box.style[domTransform]=parameterToTransform(me._email_box.ggParameter);
			}
			me._email_box.ggScaleActive=!flag;
		}
		me._button_3.ggUpdatePosition=function (useTransition) {
		}
		me._contact_info.appendChild(me._button_3);
		el=me._button_1=document.createElement('div');
		els=me._button_1__img=document.createElement('img');
		els.className='ggskin ggskin_button_1';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 7px;';
		hs+='position : absolute;';
		hs+='top : 9px;';
		hs+='visibility : inherit;';
		hs+='width : 21px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_1.onclick=function (e) {
			var flag=me._call_box.ggScaleActive;
			if (player.transitionsDisabled) {
				me._call_box.style[domTransition]='none';
			} else {
				me._call_box.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._call_box.ggParameter.sx=0;me._call_box.ggParameter.sy=0;
				me._call_box.style[domTransform]=parameterToTransform(me._call_box.ggParameter);
			} else {
				me._call_box.ggParameter.sx=1;me._call_box.ggParameter.sy=1;
				me._call_box.style[domTransform]=parameterToTransform(me._call_box.ggParameter);
			}
			me._call_box.ggScaleActive=!flag;
		}
		me._button_1.ggUpdatePosition=function (useTransition) {
		}
		me._contact_info.appendChild(me._button_1);
		el=me._contact_data=document.createElement('div');
		els=me._contact_data__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Contact Data";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 69px;';
		hs+='left : 41px;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : inherit;';
		hs+='width : 250px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 250px;';
		hs+='height: 69px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 18px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Renee Marie R. Ancheta<br\/>Marketing Professional<br\/>Toyota Quezon Avenue, Inc";
		el.appendChild(els);
		me._contact_data.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._contact_data.ggUpdatePosition=function (useTransition) {
		}
		me._contact_info.appendChild(me._contact_data);
		me.divSkin.appendChild(me._contact_info);
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs=basePath + 'images/image_1.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 93px;';
		hs+='left : 16px;';
		hs+='position : absolute;';
		hs+='top : 14px;';
		hs+='visibility : inherit;';
		hs+='width : 107px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._image_1);
		el=me._map_1=document.createElement('div');
		el.ggId="Map 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0,sy:0 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #c1c1c1;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 376px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 460px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._map_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._map_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._map=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggId="Map";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 371px;';
		hs+='left : -10000px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 455px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._map.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._map.ggNodeChange=function () {
			if (me._map.ggLastActivMarker) {
				if (me._map.ggLastActivMarker._div.ggDeactivate) me._map.ggLastActivMarker._div.ggDeactivate();
			}
			var id=player.getCurrentNode();
			if (me.ggMarkerArray) {
			var marker=me._map.ggMarkerArray[id];
			if (marker) {
				if (marker._div.ggActivate) marker._div.ggActivate();
			}
			me._map.ggLastActivMarker=marker;
			}
			if (player.getMapType(me._map.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map.ggChangeMap(mapId);
					}
				}
			}
			me._map.ggLastNodeId = id;
		}
		me._map_1.appendChild(me._map);
		el=me._map_close=document.createElement('div');
		els=me._map_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4wLjIsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OT'+
			'kveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIG9wYWNpdHk9IjAuNCI+DQoJPHBhdGggc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTIxLjEzMiwxOS40MzlMMTcuNjkyLDE2bDMuNDQtMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNSwwLTEuNjkzDQoJCWMtMC40NjctMC40NjctMS4yMjUtMC40NjctMS42OTEsMC4wMDFMMTYsMTQuMzA4bC0zLjQ0MS0zLjQ0MWMtMC40NjctMC40'+
			'NjctMS4yMjQtMC40NjctMS42OTEsMC4wMDENCgkJYy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNCwwLDEuNjlMMTQuMzA5LDE2bC0zLjQ0LDMuNDRjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI2LDAsMS42OTJjMC40NjcsMC40NjcsMS4yMjYsMC40NjcsMS42OTIsMA0KCQlsMy40NC0zLjQ0bDMuNDM5LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI1LDAuNDY4LDEuNjkxLDAuMDAxQzIxLjU5OSwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MQ0KCQljLTQuODgyLTQuODgyLTEyLjc5Ni00Ljg4Mi0xNy42NzgsMGMtNC44ODEsNC44ODEtNC44ODEsMTIuNzk1LDAsMTcuNj'+
			'c4YzQuODgxLDQuODgsMTIuNzk2LDQuODgsMTcuNjc4LDANCgkJQzI5LjcyLDE5Ljk1NiwyOS43MiwxMi4wNDIsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU4OS0wLjAwMS01LjE3LTAuOTg1LTcuMTQ2LTIuOTYxUzUuODk1LDE4LjU5LDUuODk0LDE2DQoJCWMwLTIuNTkxLDAuOTg0LTUuMTcsMi45Ni03LjE0N0MxMC44Myw2Ljg3OCwxMy40MDksNS44OTQsMTYsNS44OTRjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OQ0KCQljMS45NzYsMS45NzcsMi45NTcsNC41NTYsMi45Niw3LjE0N2MtMC4wMDEsMi41OTEtMC45ODUsNS4xNjktMi45Niw3LjE0OEMyMS4xNjksMjUuMTIy'+
			'LDE4LjU5MSwyNi4xMDYsMTYsMjYuMTA2eiIvPg0KPC9nPg0KPGc+DQoJPHBhdGggZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMiIgZD0iTTIxLjEzMiwxOS40MzlMMTcuNjkyLDE2bDMuNDQtMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNSwwLTEuNjkzDQoJCWMtMC40NjctMC40NjctMS4yMjUtMC40NjctMS42OTEsMC4wMDFMMTYsMTQuMzA4bC0zLjQ0MS0zLjQ0MWMtMC40NjctMC40NjctMS4yMjQtMC40NjctMS42OTEsMC4wMDENCgkJYy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNCwwLDEuNjlMMTQuMzA5LDE2bC0zLjQ0LDMuNDRjLTAuNDY3LDAuND'+
			'Y3LTAuNDY3LDEuMjI2LDAsMS42OTJjMC40NjcsMC40NjcsMS4yMjYsMC40NjcsMS42OTIsMA0KCQlsMy40NC0zLjQ0bDMuNDM5LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI1LDAuNDY4LDEuNjkxLDAuMDAxQzIxLjU5OSwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MQ0KCQljLTQuODgyLTQuODgyLTEyLjc5Ni00Ljg4Mi0xNy42NzgsMGMtNC44ODEsNC44ODEtNC44ODEsMTIuNzk1LDAsMTcuNjc4YzQuODgxLDQuODgsMTIuNzk2LDQuODgsMTcuNjc4LDANCgkJQzI5LjcyLDE5Ljk1NiwyOS43MiwxMi4wNDIsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU4'+
			'OS0wLjAwMS01LjE3LTAuOTg1LTcuMTQ2LTIuOTYxUzUuODk1LDE4LjU5LDUuODk0LDE2DQoJCWMwLTIuNTkxLDAuOTg0LTUuMTcsMi45Ni03LjE0N0MxMC44Myw2Ljg3OCwxMy40MDksNS44OTQsMTYsNS44OTRjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OQ0KCQljMS45NzYsMS45NzcsMi45NTcsNC41NTYsMi45Niw3LjE0N2MtMC4wMDEsMi41OTEtMC45ODUsNS4xNjktMi45Niw3LjE0OEMyMS4xNjksMjUuMTIyLDE4LjU5MSwyNi4xMDYsMTYsMjYuMTA2eiIvPg0KPC9nPg0KPC9zdmc+DQo=';
		me._map_close__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;map_close;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._map_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4wLjIsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OT'+
			'kveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgb3BhY2l0eT0iMC40Ij4NCgk8cGF0aCBzdHJva2U9IiMzQzNDM0MiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMjEuMTMyLDE5LjQzOUwxNy42OTMsMTZsMy40MzktMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNiwwLjAwMS0xLjY5Mw0KCQljLTAuNDY3'+
			'LTAuNDY3LTEuMjI1LTAuNDY3LTEuNjkyLDAuMDAxbC0zLjQ0LDMuNDRsLTMuNDQxLTMuNDQxYy0wLjQ2OC0wLjQ2OC0xLjIyNS0wLjQ2Ny0xLjY5MywwDQoJCWMtMC40NjcsMC40NjctMC40NjcsMS4yMjUsMCwxLjY5MkwxNC4zMDksMTZsLTMuNDQsMy40NGMtMC40NjcsMC40NjYtMC40NjcsMS4yMjQsMCwxLjY5MWMwLjQ2NywwLjQ2NywxLjIyNiwwLjQ2NywxLjY5MiwwLjAwMQ0KCQlsMy40NC0zLjQ0bDMuNDQsMy40MzljMC40NjgsMC40NjgsMS4yMjQsMC40NjcsMS42OTEsMEMyMS41OTgsMjAuNjY0LDIxLjYsMTkuOTA3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjENCgkJYy00Ljg4Mi'+
			'00Ljg4Mi0xMi43OTYtNC44ODItMTcuNjc4LDBjLTQuODgxLDQuODgxLTQuODgxLDEyLjc5NiwwLDE3LjY3OGM0Ljg4Miw0Ljg4MSwxMi43OTYsNC44ODEsMTcuNjc4LDANCgkJQzI5LjcyLDE5Ljk1NywyOS43MjEsMTIuMDQzLDI0LjgzOSw3LjE2MXogTTE2LDI2LjEwNmMtMi41OSwwLTUuMTcxLTAuOTg0LTcuMTQ2LTIuOTU5QzYuODc4LDIxLjE3LDUuODk1LDE4LjU5MSw1Ljg5NCwxNg0KCQljMC0yLjU5MSwwLjk4My01LjE3LDIuOTU5LTcuMTQ3YzEuOTc3LTEuOTc2LDQuNTU2LTIuOTU5LDcuMTQ4LTIuOTZjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OQ0KCQljMS45NzUsMS45'+
			'NzcsMi45NTcsNC41NTYsMi45NTksNy4xNDdjLTAuMDAxLDIuNTkyLTAuOTg0LDUuMTctMi45Niw3LjE0OEMyMS4xNywyNS4xMjMsMTguNTkxLDI2LjEwNywxNiwyNi4xMDZ6Ii8+DQo8L2c+DQo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiPg0KCTxwYXRoIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjIiIGQ9Ik0yMS4xMzIsMTkuNDM5TDE3LjY5MywxNmwzLjQzOS0zLjQ0DQoJCWMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNiwwLjAwMS0xLjY5M2MtMC40NjctMC40NjctMS4yMjUtMC40NjctMS'+
			'42OTIsMC4wMDFsLTMuNDQsMy40NGwtMy40NDEtMy40NDENCgkJYy0wLjQ2OC0wLjQ2OC0xLjIyNS0wLjQ2Ny0xLjY5MywwYy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNSwwLDEuNjkyTDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ni0wLjQ2NywxLjIyNCwwLDEuNjkxDQoJCWMwLjQ2NywwLjQ2NywxLjIyNiwwLjQ2NywxLjY5MiwwLjAwMWwzLjQ0LTMuNDRsMy40NCwzLjQzOWMwLjQ2OCwwLjQ2OCwxLjIyNCwwLjQ2NywxLjY5MSwwDQoJCUMyMS41OTgsMjAuNjY0LDIxLjYsMTkuOTA3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjFjLTQuODgyLTQuODgyLTEyLjc5Ni00Ljg4Mi0x'+
			'Ny42NzgsMGMtNC44ODEsNC44ODEtNC44ODEsMTIuNzk2LDAsMTcuNjc4DQoJCWM0Ljg4Miw0Ljg4MSwxMi43OTYsNC44ODEsMTcuNjc4LDBDMjkuNzIsMTkuOTU3LDI5LjcyMSwxMi4wNDMsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU5LDAtNS4xNzEtMC45ODQtNy4xNDYtMi45NTkNCgkJQzYuODc4LDIxLjE3LDUuODk1LDE4LjU5MSw1Ljg5NCwxNmMwLTIuNTkxLDAuOTgzLTUuMTcsMi45NTktNy4xNDdjMS45NzctMS45NzYsNC41NTYtMi45NTksNy4xNDgtMi45Ng0KCQljMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OWMxLjk3NSwxLjk3NywyLjk1Nyw0LjU1NiwyLjk1OS'+
			'w3LjE0N2MtMC4wMDEsMi41OTItMC45ODQsNS4xNy0yLjk2LDcuMTQ4DQoJCUMyMS4xNywyNS4xMjMsMTguNTkxLDI2LjEwNywxNiwyNi4xMDZ6Ii8+DQo8L2c+DQo8L3N2Zz4NCg==';
		me._map_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;map_close;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="map_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 6px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._map_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_close.onclick=function (e) {
			var flag=me._map_1.ggScaleActive;
			if (player.transitionsDisabled) {
				me._map_1.style[domTransition]='none';
			} else {
				me._map_1.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._map_1.ggParameter.sx=0;me._map_1.ggParameter.sy=0;
				me._map_1.style[domTransform]=parameterToTransform(me._map_1.ggParameter);
			} else {
				me._map_1.ggParameter.sx=0;me._map_1.ggParameter.sy=0;
				me._map_1.style[domTransform]=parameterToTransform(me._map_1.ggParameter);
			}
			me._map_1.ggScaleActive=!flag;
		}
		me._map_close.onmouseover=function (e) {
			me._map_close__img.style.visibility='hidden';
			me._map_close__imgo.style.visibility='inherit';
		}
		me._map_close.onmouseout=function (e) {
			me._map_close__img.style.visibility='inherit';
			me._map_close__imgo.style.visibility='hidden';
		}
		me._map_close.ggUpdatePosition=function (useTransition) {
		}
		me._map_1.appendChild(me._map_close);
		me.divSkin.appendChild(me._map_1);
		el=me._thumbnail_show_button_show=document.createElement('div');
		els=me._thumbnail_show_button_show__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMH'+
			'B4IiB5PSIwcHgiIHdpZHRoPSIzMnB4Ig0KCSBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGcgaWQ9IkxheWVyXzEiPg0KCTxnIGlkPSJMYXllcl8xXzFfIj4NCgk8L2c+DQo8L2c+DQo8ZyBpZD0iRWJlbmVfMV8xXyI+DQoJPGc+DQoJCTxnIG9wYWNpdHk9IjAuNCI+DQoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzQzNDM0MiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMTYsMy41MDFDOS4xMDcsMy41MDEsMy41LDkuMTA4LDMuNSwxNlM5LjEwNywyOC40OTksMTYsMjgu'+
			'NDk5DQoJCQkJYzYuODkzLDAsMTIuNDk5LTUuNjA3LDEyLjQ5OS0xMi40OTlTMjIuODkzLDMuNTAxLDE2LDMuNTAxeiBNMTYsMjYuMDc5Yy01LjU1OCwwLTEwLjA4LTQuNTIxLTEwLjA4LTEwLjA3OVMxMC40NDIsNS45MiwxNiw1LjkyDQoJCQkJYzUuNTU3LDAsMTAuMDgxLDQuNTIyLDEwLjA4MSwxMC4wOFMyMS41NTcsMjYuMDc5LDE2LDI2LjA3OXoiLz4NCgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzNDM0MzQyIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xMS4yNzEsMTMuNTIxSDguODc1Yy0wLjcwNywwLTEuMjgsMC41NzMtMS4yOCwxLjI4djIuMzk2DQoJCQkJYzAsMC43MDcsMC41Nz'+
			'MsMS4yOCwxLjI4LDEuMjhoMi4zOTZjMC43MDcsMCwxLjI4LTAuNTczLDEuMjgtMS4yOHYtMi4zOTZDMTIuNTUxLDE0LjA5NSwxMS45NzgsMTMuNTIxLDExLjI3MSwxMy41MjF6Ii8+DQoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzQzNDM0MiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMTcuMTUyLDEzLjUyMWgtMi4zOTZjLTAuNzA3LDAtMS4yOCwwLjU3My0xLjI4LDEuMjh2Mi4zOTYNCgkJCQljMCwwLjcwNywwLjU3MywxLjI3OSwxLjI4LDEuMjc5aDIuMzk2YzAuNzA3LDAsMS4yNzktMC41NzIsMS4yNzktMS4yNzl2LTIuMzk2QzE4LjQzMiwxNC4wOTUsMTcuODU5LDEzLjUyMSwxNy4x'+
			'NTIsMTMuNTIxeiIvPg0KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTIzLjAzNSwxMy41MjFoLTIuMzk2Yy0wLjcwNywwLTEuMjgxLDAuNTczLTEuMjgxLDEuMjh2Mi4zOTYNCgkJCQljMCwwLjcwNywwLjU3NCwxLjI3OSwxLjI4MSwxLjI3OWgyLjM5NmMwLjcwNywwLDEuMjgxLTAuNTcyLDEuMjgxLTEuMjc5di0yLjM5NkMyNC4zMTYsMTQuMDk1LDIzLjc0MiwxMy41MjEsMjMuMDM1LDEzLjUyMXoiLz4NCgkJPC9nPg0KCQk8Zz4NCgkJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0xNiwzLjUwMUM5LjEwNywzLjUwMSwzLjUsOS4xMD'+
			'gsMy41LDE2UzkuMTA3LDI4LjQ5OSwxNiwyOC40OTljNi44OTMsMCwxMi40OTktNS42MDcsMTIuNDk5LTEyLjQ5OQ0KCQkJCVMyMi44OTMsMy41MDEsMTYsMy41MDF6IE0xNiwyNi4wNzljLTUuNTU4LDAtMTAuMDgtNC41MjEtMTAuMDgtMTAuMDc5UzEwLjQ0Miw1LjkyLDE2LDUuOTJjNS41NTcsMCwxMC4wODEsNC41MjIsMTAuMDgxLDEwLjA4DQoJCQkJUzIxLjU1NywyNi4wNzksMTYsMjYuMDc5eiIvPg0KCQkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTExLjI3MSwxMy41MjFIOC44NzVjLTAuNzA3LDAtMS4yOCwwLjU3My0xLjI4LDEuMjh2Mi4zOTZjMCwwLjcwNywwLjU3MywxLjI4LDEuMjgs'+
			'MS4yOGgyLjM5Ng0KCQkJCWMwLjcwNywwLDEuMjgtMC41NzMsMS4yOC0xLjI4di0yLjM5NkMxMi41NTEsMTQuMDk1LDExLjk3OCwxMy41MjEsMTEuMjcxLDEzLjUyMXoiLz4NCgkJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0xNy4xNTIsMTMuNTIxaC0yLjM5NmMtMC43MDcsMC0xLjI4LDAuNTczLTEuMjgsMS4yOHYyLjM5NmMwLDAuNzA3LDAuNTczLDEuMjc5LDEuMjgsMS4yNzloMi4zOTYNCgkJCQljMC43MDcsMCwxLjI3OS0wLjU3MiwxLjI3OS0xLjI3OXYtMi4zOTZDMTguNDMyLDE0LjA5NSwxNy44NTksMTMuNTIxLDE3LjE1MiwxMy41MjF6Ii8+DQoJCQk8cGF0aCBmaWxsPSIjRkZGRkZGIi'+
			'BkPSJNMjMuMDM1LDEzLjUyMWgtMi4zOTZjLTAuNzA3LDAtMS4yODEsMC41NzMtMS4yODEsMS4yOHYyLjM5NmMwLDAuNzA3LDAuNTc0LDEuMjc5LDEuMjgxLDEuMjc5aDIuMzk2DQoJCQkJYzAuNzA3LDAsMS4yODEtMC41NzIsMS4yODEtMS4yNzl2LTIuMzk2QzI0LjMxNiwxNC4wOTUsMjMuNzQyLDEzLjUyMSwyMy4wMzUsMTMuNTIxeiIvPg0KCQk8L2c+DQoJCTxnPg0KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMiIgZD0iTTE2LDMuNTAxQzkuMTA3LDMuNTAxLDMuNSw5LjEwOCwzLjUsMTZTOS4xMDcsMjguNDk5LDE2LDI4LjQ5OQ0KCQkJCWM2'+
			'Ljg5MywwLDEyLjQ5OS01LjYwNywxMi40OTktMTIuNDk5UzIyLjg5MywzLjUwMSwxNiwzLjUwMXogTTE2LDI2LjA3OWMtNS41NTgsMC0xMC4wOC00LjUyMS0xMC4wOC0xMC4wNzlTMTAuNDQyLDUuOTIsMTYsNS45Mg0KCQkJCWM1LjU1NywwLDEwLjA4MSw0LjUyMiwxMC4wODEsMTAuMDhTMjEuNTU3LDI2LjA3OSwxNiwyNi4wNzl6Ii8+DQoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMC4yIiBkPSJNMTEuMjcxLDEzLjUyMUg4Ljg3NWMtMC43MDcsMC0xLjI4LDAuNTczLTEuMjgsMS4yOHYyLjM5Ng0KCQkJCWMwLDAuNzA3LDAuNTczLDEuMjgsMS4yOC'+
			'wxLjI4aDIuMzk2YzAuNzA3LDAsMS4yOC0wLjU3MywxLjI4LTEuMjh2LTIuMzk2QzEyLjU1MSwxNC4wOTUsMTEuOTc4LDEzLjUyMSwxMS4yNzEsMTMuNTIxeiIvPg0KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMiIgZD0iTTE3LjE1MiwxMy41MjFoLTIuMzk2Yy0wLjcwNywwLTEuMjgsMC41NzMtMS4yOCwxLjI4djIuMzk2DQoJCQkJYzAsMC43MDcsMC41NzMsMS4yNzksMS4yOCwxLjI3OWgyLjM5NmMwLjcwNywwLDEuMjc5LTAuNTcyLDEuMjc5LTEuMjc5di0yLjM5NkMxOC40MzIsMTQuMDk1LDE3Ljg1OSwxMy41MjEsMTcuMTUyLDEzLjUyMXoi'+
			'Lz4NCgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjIiIGQ9Ik0yMy4wMzUsMTMuNTIxaC0yLjM5NmMtMC43MDcsMC0xLjI4MSwwLjU3My0xLjI4MSwxLjI4djIuMzk2DQoJCQkJYzAsMC43MDcsMC41NzQsMS4yNzksMS4yODEsMS4yNzloMi4zOTZjMC43MDcsMCwxLjI4MS0wLjU3MiwxLjI4MS0xLjI3OXYtMi4zOTZDMjQuMzE2LDE0LjA5NSwyMy43NDIsMTMuNTIxLDIzLjAzNSwxMy41MjF6Ii8+DQoJCTwvZz4NCgk8L2c+DQo8L2c+DQo8L3N2Zz4NCg==';
		me._thumbnail_show_button_show__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;thumbnail_show_button_show;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._thumbnail_show_button_show__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMH'+
			'B4IiB5PSIwcHgiIHdpZHRoPSIzMnB4Ig0KCSBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGcgaWQ9IkxheWVyXzEiPg0KCTxnIGlkPSJMYXllcl8xXzFfIj4NCgk8L2c+DQo8L2c+DQo8ZyBpZD0iRWJlbmVfMV8xXyI+DQoJPGc+DQoJCTxnIG9wYWNpdHk9IjAuNCI+DQoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzQzNDM0MiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMTUuOTk5LDIuMjUxQzguNDE3LDIuMjUxLDIuMjUsOC40MTksMi4yNSwxNg0KCQkJCXM2LjE2Nywx'+
			'My43NDksMTMuNzQ5LDEzLjc0OWM3LjU4MywwLDEzLjc0OS02LjE2OCwxMy43NDktMTMuNzQ5UzIzLjU4MiwyLjI1MSwxNS45OTksMi4yNTF6IE0xNS45OTksMjcuMDg3DQoJCQkJQzkuODg2LDI3LjA4Nyw0LjkxMSwyMi4xMTMsNC45MTEsMTZTOS44ODYsNC45MTIsMTUuOTk5LDQuOTEyUzI3LjA4OCw5Ljg4NywyNy4wODgsMTZTMjIuMTEyLDI3LjA4NywxNS45OTksMjcuMDg3eiIvPg0KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTEwLjc5OCwxMy4yNzNIOC4xNjJjLTAuNzc4LDAtMS40MDgsMC42MzEtMS40MDgsMS40MDh2Mi42Mz'+
			'cNCgkJCQljMCwwLjc3NywwLjYzLDEuNDA4LDEuNDA4LDEuNDA4aDIuNjM2YzAuNzc3LDAsMS40MDgtMC42MzEsMS40MDgtMS40MDh2LTIuNjM3QzEyLjIwNiwxMy45MDQsMTEuNTc1LDEzLjI3MywxMC43OTgsMTMuMjczeiIvPg0KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTE3LjI2OCwxMy4yNzNoLTIuNjM2Yy0wLjc3NywwLTEuNDA4LDAuNjMxLTEuNDA4LDEuNDA4djIuNjM3DQoJCQkJYzAsMC43NzcsMC42MzEsMS40MDcsMS40MDgsMS40MDdoMi42MzZjMC43NzcsMCwxLjQwNy0wLjYzLDEuNDA3LTEuNDA3di0yLjYzN0MxOC42'+
			'NzUsMTMuOTA0LDE4LjA0NSwxMy4yNzMsMTcuMjY4LDEzLjI3M3oiLz4NCgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzNDM0MzQyIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0yMy43MzgsMTMuMjczaC0yLjYzNmMtMC43NzgsMC0xLjQwOSwwLjYzMS0xLjQwOSwxLjQwOHYyLjYzNw0KCQkJCWMwLDAuNzc3LDAuNjMxLDEuNDA3LDEuNDA5LDEuNDA3aDIuNjM2YzAuNzc4LDAsMS40MDktMC42MywxLjQwOS0xLjQwN3YtMi42MzdDMjUuMTQ3LDEzLjkwNCwyNC41MTcsMTMuMjczLDIzLjczOCwxMy4yNzN6Ii8+DQoJCTwvZz4NCgkJPGc+DQoJCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMT'+
			'UuOTk5LDIuMjUxQzguNDE3LDIuMjUxLDIuMjUsOC40MTksMi4yNSwxNnM2LjE2NywxMy43NDksMTMuNzQ5LDEzLjc0OQ0KCQkJCWM3LjU4MywwLDEzLjc0OS02LjE2OCwxMy43NDktMTMuNzQ5UzIzLjU4MiwyLjI1MSwxNS45OTksMi4yNTF6IE0xNS45OTksMjcuMDg3QzkuODg2LDI3LjA4Nyw0LjkxMSwyMi4xMTMsNC45MTEsMTYNCgkJCQlTOS44ODYsNC45MTIsMTUuOTk5LDQuOTEyUzI3LjA4OCw5Ljg4NywyNy4wODgsMTZTMjIuMTEyLDI3LjA4NywxNS45OTksMjcuMDg3eiIvPg0KCQkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTEwLjc5OCwxMy4yNzNIOC4xNjJjLTAuNzc4LDAtMS40MDgs'+
			'MC42MzEtMS40MDgsMS40MDh2Mi42MzdjMCwwLjc3NywwLjYzLDEuNDA4LDEuNDA4LDEuNDA4aDIuNjM2DQoJCQkJYzAuNzc3LDAsMS40MDgtMC42MzEsMS40MDgtMS40MDh2LTIuNjM3QzEyLjIwNiwxMy45MDQsMTEuNTc1LDEzLjI3MywxMC43OTgsMTMuMjczeiIvPg0KCQkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTE3LjI2OCwxMy4yNzNoLTIuNjM2Yy0wLjc3NywwLTEuNDA4LDAuNjMxLTEuNDA4LDEuNDA4djIuNjM3YzAsMC43NzcsMC42MzEsMS40MDcsMS40MDgsMS40MDdoMi42MzYNCgkJCQljMC43NzcsMCwxLjQwNy0wLjYzLDEuNDA3LTEuNDA3di0yLjYzN0MxOC42NzUsMTMuOTA0LD'+
			'E4LjA0NSwxMy4yNzMsMTcuMjY4LDEzLjI3M3oiLz4NCgkJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0yMy43MzgsMTMuMjczaC0yLjYzNmMtMC43NzgsMC0xLjQwOSwwLjYzMS0xLjQwOSwxLjQwOHYyLjYzN2MwLDAuNzc3LDAuNjMxLDEuNDA3LDEuNDA5LDEuNDA3aDIuNjM2DQoJCQkJYzAuNzc4LDAsMS40MDktMC42MywxLjQwOS0xLjQwN3YtMi42MzdDMjUuMTQ3LDEzLjkwNCwyNC41MTcsMTMuMjczLDIzLjczOCwxMy4yNzN6Ii8+DQoJCTwvZz4NCgkJPGc+DQoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMC4yIiBkPSJNMTUuOTk5LDIuMjUx'+
			'QzguNDE3LDIuMjUxLDIuMjUsOC40MTksMi4yNSwxNg0KCQkJCXM2LjE2NywxMy43NDksMTMuNzQ5LDEzLjc0OWM3LjU4MywwLDEzLjc0OS02LjE2OCwxMy43NDktMTMuNzQ5UzIzLjU4MiwyLjI1MSwxNS45OTksMi4yNTF6IE0xNS45OTksMjcuMDg3DQoJCQkJQzkuODg2LDI3LjA4Nyw0LjkxMSwyMi4xMTMsNC45MTEsMTZTOS44ODYsNC45MTIsMTUuOTk5LDQuOTEyUzI3LjA4OCw5Ljg4NywyNy4wODgsMTZTMjIuMTEyLDI3LjA4NywxNS45OTksMjcuMDg3eiIvPg0KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMiIgZD0iTTEwLjc5OCwxMy4yNz'+
			'NIOC4xNjJjLTAuNzc4LDAtMS40MDgsMC42MzEtMS40MDgsMS40MDh2Mi42MzcNCgkJCQljMCwwLjc3NywwLjYzLDEuNDA4LDEuNDA4LDEuNDA4aDIuNjM2YzAuNzc3LDAsMS40MDgtMC42MzEsMS40MDgtMS40MDh2LTIuNjM3QzEyLjIwNiwxMy45MDQsMTEuNTc1LDEzLjI3MywxMC43OTgsMTMuMjczeiIvPg0KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMiIgZD0iTTE3LjI2OCwxMy4yNzNoLTIuNjM2Yy0wLjc3NywwLTEuNDA4LDAuNjMxLTEuNDA4LDEuNDA4djIuNjM3DQoJCQkJYzAsMC43NzcsMC42MzEsMS40MDcsMS40MDgsMS40MDdoMi42'+
			'MzZjMC43NzcsMCwxLjQwNy0wLjYzLDEuNDA3LTEuNDA3di0yLjYzN0MxOC42NzUsMTMuOTA0LDE4LjA0NSwxMy4yNzMsMTcuMjY4LDEzLjI3M3oiLz4NCgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjIiIGQ9Ik0yMy43MzgsMTMuMjczaC0yLjYzNmMtMC43NzgsMC0xLjQwOSwwLjYzMS0xLjQwOSwxLjQwOHYyLjYzNw0KCQkJCWMwLDAuNzc3LDAuNjMxLDEuNDA3LDEuNDA5LDEuNDA3aDIuNjM2YzAuNzc4LDAsMS40MDktMC42MywxLjQwOS0xLjQwN3YtMi42MzdDMjUuMTQ3LDEzLjkwNCwyNC41MTcsMTMuMjczLDIzLjczOCwxMy4yNzN6Ii8+DQ'+
			'oJCTwvZz4NCgk8L2c+DQo8L2c+DQo8L3N2Zz4NCg==';
		me._thumbnail_show_button_show__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;thumbnail_show_button_show;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="thumbnail_show_button_show";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 23px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_show_button_show.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnail_show_button_show.onclick=function (e) {
			player.setVariableValue('vis_thumbnail_menu', !player.getVariableValue('vis_thumbnail_menu'));
		}
		me._thumbnail_show_button_show.onmouseover=function (e) {
			me._thumbnail_show_button_show__img.style.visibility='hidden';
			me._thumbnail_show_button_show__imgo.style.visibility='inherit';
			me.elementMouseOver['thumbnail_show_button_show']=true;
			me._tt_thumbnail_open.logicBlock_visible();
		}
		me._thumbnail_show_button_show.onmouseout=function (e) {
			me._thumbnail_show_button_show__img.style.visibility='inherit';
			me._thumbnail_show_button_show__imgo.style.visibility='hidden';
			me.elementMouseOver['thumbnail_show_button_show']=false;
			me._tt_thumbnail_open.logicBlock_visible();
		}
		me._thumbnail_show_button_show.ontouchend=function (e) {
			me.elementMouseOver['thumbnail_show_button_show']=false;
			me._tt_thumbnail_open.logicBlock_visible();
		}
		me._thumbnail_show_button_show.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._tt_thumbnail_open=document.createElement('div');
		els=me._tt_thumbnail_open__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_thumbnail_open";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._tt_thumbnail_open.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_thumbnail_open.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_thumbnail_open.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_thumbnail_open.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_thumbnail_open.style[domTransition]='left 0s, top 0s';
				if (me._tt_thumbnail_open.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_thumbnail_open.style.top='-25px';
					me._tt_thumbnail_open.ggUpdatePosition(true);
				}
				else {
					me._tt_thumbnail_open.ggDx=0;
					me._tt_thumbnail_open.style.top='32px';
					me._tt_thumbnail_open.ggUpdatePosition(true);
				}
			}
		}
		me._tt_thumbnail_open.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['thumbnail_show_button_show'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_thumbnail_open.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_thumbnail_open.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_thumbnail_open.style[domTransition]='left 0s, top 0s';
				if (me._tt_thumbnail_open.ggCurrentLogicStateVisible == 0) {
					me._tt_thumbnail_open.style.visibility=(Number(me._tt_thumbnail_open.style.opacity)>0||!me._tt_thumbnail_open.style.opacity)?'inherit':'hidden';
					me._tt_thumbnail_open.ggVisible=true;
				}
				else {
					me._tt_thumbnail_open.style.visibility="hidden";
					me._tt_thumbnail_open.ggVisible=false;
				}
			}
		}
		me._tt_thumbnail_open.logicBlock_text = function() {
			var newLogicStateText;
			if (
				(player.getVariableValue('vis_thumbnail_menu') == false)
			)
			{
				newLogicStateText = 0;
			}
			else if (
				(player.getVariableValue('vis_thumbnail_menu') == true)
			)
			{
				newLogicStateText = 1;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._tt_thumbnail_open.ggCurrentLogicStateText != newLogicStateText) {
				me._tt_thumbnail_open.ggCurrentLogicStateText = newLogicStateText;
				me._tt_thumbnail_open.style[domTransition]='left 0s, top 0s';
				if (me._tt_thumbnail_open.ggCurrentLogicStateText == 0) {
					me._tt_thumbnail_open.ggText="Show Thumbnail Menu";
					me._tt_thumbnail_open__text.innerHTML=me._tt_thumbnail_open.ggText;
					if (me._tt_thumbnail_open.ggUpdateText) {
					me._tt_thumbnail_open.ggUpdateText=function() {
						var hs="Show Thumbnail Menu";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_thumbnail_open.ggUpdatePosition) me._tt_thumbnail_open.ggUpdatePosition();
					}
				}
				else if (me._tt_thumbnail_open.ggCurrentLogicStateText == 1) {
					me._tt_thumbnail_open.ggText="Hide Thumbnail Menu";
					me._tt_thumbnail_open__text.innerHTML=me._tt_thumbnail_open.ggText;
					if (me._tt_thumbnail_open.ggUpdateText) {
					me._tt_thumbnail_open.ggUpdateText=function() {
						var hs="Hide Thumbnail Menu";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_thumbnail_open.ggUpdatePosition) me._tt_thumbnail_open.ggUpdatePosition();
					}
				}
				else {
					me._tt_thumbnail_open.ggText="";
					me._tt_thumbnail_open__text.innerHTML=me._tt_thumbnail_open.ggText;
					if (me._tt_thumbnail_open.ggUpdateText) {
					me._tt_thumbnail_open.ggUpdateText=function() {
						var hs="";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_thumbnail_open.ggUpdatePosition) me._tt_thumbnail_open.ggUpdatePosition();
					}
				}
			}
		}
		me._tt_thumbnail_open.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._thumbnail_show_button_show.appendChild(me._tt_thumbnail_open);
		me.divSkin.appendChild(me._thumbnail_show_button_show);
		el=me._thumbnail_menu=document.createElement('div');
		els=me._thumbnail_menu__content=document.createElement('div');
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		hs ='';
		hs+='height : 73px;';
		hs+='left : 50%;';
		hs+='margin-left : -57.5px;';
		hs+='margin-top : -36.5px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 50%;';
		hs+='width : 115px;';
		hs+="";
		els.setAttribute('style',hs);
		me._thumbnail_menu.ggScrollByX = function(diffX) {
			if(!me._thumbnail_menu.ggHorScrollVisible || diffX == 0) return;
			me._thumbnail_menu.ggScrollPosX = (me._thumbnail_menu__horScrollFg.offsetLeft + diffX);
			me._thumbnail_menu.ggScrollPosX = Math.max(me._thumbnail_menu.ggScrollPosX, 0);
			me._thumbnail_menu.ggScrollPosX = Math.min(me._thumbnail_menu.ggScrollPosX, me._thumbnail_menu__horScrollBg.clientWidth - me._thumbnail_menu__horScrollFg.clientWidth);
			me._thumbnail_menu__horScrollFg.style.left = me._thumbnail_menu.ggScrollPosX + 'px';
			me._thumbnail_menu__content.style.left = -(Math.round(me._thumbnail_menu.ggScrollPosX / me._thumbnail_menu.ggHPercentVisible)) + me._thumbnail_menu.ggContentLeftOffset + 'px';
			me._thumbnail_menu.ggScrollPosXPercent = (me._thumbnail_menu__horScrollFg.offsetLeft / me._thumbnail_menu__horScrollBg.clientWidth);
		}
		me._thumbnail_menu.ggScrollByXSmooth = function(diffX) {
			if(!me._thumbnail_menu.ggHorScrollVisible || diffX == 0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._thumbnail_menu.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._thumbnail_menu.ggScrollPosX >= me._thumbnail_menu__horScrollBg.clientWidth - me._thumbnail_menu__horScrollFg.clientWidth)) {
					me._thumbnail_menu.ggScrollPosX = Math.min(me._thumbnail_menu.ggScrollPosX, me._thumbnail_menu__horScrollBg.clientWidth - me._thumbnail_menu__horScrollFg.clientWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._thumbnail_menu.ggScrollPosX <= 0)) {
					me._thumbnail_menu.ggScrollPosX = Math.max(me._thumbnail_menu.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._thumbnail_menu__horScrollFg.style.left = me._thumbnail_menu.ggScrollPosX + 'px';
			me._thumbnail_menu__content.style.left = -(Math.round(me._thumbnail_menu.ggScrollPosX / me._thumbnail_menu.ggHPercentVisible)) + me._thumbnail_menu.ggContentLeftOffset + 'px';
			me._thumbnail_menu.ggScrollPosXPercent = (me._thumbnail_menu__horScrollFg.offsetLeft / me._thumbnail_menu__horScrollBg.clientWidth);
			}, 10);
		}
		me._thumbnail_menu.ggScrollByY = function(diffY) {
			if(!me._thumbnail_menu.ggVertScrollVisible || diffY == 0) return;
			me._thumbnail_menu.ggScrollPosY = (me._thumbnail_menu__vertScrollFg.offsetTop + diffY);
			me._thumbnail_menu.ggScrollPosY = Math.max(me._thumbnail_menu.ggScrollPosY, 0);
			me._thumbnail_menu.ggScrollPosY = Math.min(me._thumbnail_menu.ggScrollPosY, me._thumbnail_menu__vertScrollBg.clientHeight - me._thumbnail_menu__vertScrollFg.clientHeight);
			me._thumbnail_menu__vertScrollFg.style.top = me._thumbnail_menu.ggScrollPosY + 'px';
			me._thumbnail_menu__content.style.top = -(Math.round(me._thumbnail_menu.ggScrollPosY / me._thumbnail_menu.ggVPercentVisible)) + me._thumbnail_menu.ggContentTopOffset + 'px';
			me._thumbnail_menu.ggScrollPosYPercent = (me._thumbnail_menu__vertScrollFg.offsetTop / me._thumbnail_menu__vertScrollBg.clientHeight);
		}
		me._thumbnail_menu.ggScrollByYSmooth = function(diffY) {
			if(!me._thumbnail_menu.ggVertScrollVisible || diffY == 0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._thumbnail_menu.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._thumbnail_menu.ggScrollPosY >= me._thumbnail_menu__vertScrollBg.clientHeight - me._thumbnail_menu__vertScrollFg.clientHeight)) {
					me._thumbnail_menu.ggScrollPosY = Math.min(me._thumbnail_menu.ggScrollPosY, me._thumbnail_menu__vertScrollBg.clientHeight - me._thumbnail_menu__vertScrollFg.clientHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._thumbnail_menu.ggScrollPosY <= 0)) {
					me._thumbnail_menu.ggScrollPosY = Math.max(me._thumbnail_menu.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._thumbnail_menu__vertScrollFg.style.top = me._thumbnail_menu.ggScrollPosY + 'px';
			me._thumbnail_menu__content.style.top = -(Math.round(me._thumbnail_menu.ggScrollPosY / me._thumbnail_menu.ggVPercentVisible)) + me._thumbnail_menu.ggContentTopOffset + 'px';
			me._thumbnail_menu.ggScrollPosYPercent = (me._thumbnail_menu__vertScrollFg.offsetTop / me._thumbnail_menu__vertScrollBg.clientHeight);
			}, 10);
		}
		me._thumbnail_menu.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._thumbnail_menu.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._thumbnail_menu.ggHPercentVisible);
					me._thumbnail_menu.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._thumbnail_menu.clientWidth - (me._thumbnail_menu.ggVertScrollVisible ? 15 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._thumbnail_menu.clientWidth - (me._thumbnail_menu.ggVertScrollVisible ? 15 : 0))) * me._thumbnail_menu.ggHPercentVisible);
					me._thumbnail_menu.ggScrollByXSmooth(diffX);
				}
			}
			if (me._thumbnail_menu.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._thumbnail_menu.ggVPercentVisible);
					me._thumbnail_menu.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._thumbnail_menu.clientHeight - (me._thumbnail_menu.ggHorScrollVisible ? 15 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._thumbnail_menu.clientHeight - (me._thumbnail_menu.ggHorScrollVisible ? 15 : 0))) * me._thumbnail_menu.ggVPercentVisible);
					me._thumbnail_menu.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._thumbnail_menu.ggDragLastX = t[0].clientX;
			me._thumbnail_menu.ggDragLastY = t[0].clientY;
			me._thumbnail_menu__content.ontouchend = function() {
				me._thumbnail_menu__content.ontouchend = null;
				me._thumbnail_menu__content.ontouchmove = null;
			}
			me._thumbnail_menu__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
			var t = e.touches;
				var diffX = t[0].clientX - me._thumbnail_menu.ggDragLastX;
				var diffY = t[0].clientY - me._thumbnail_menu.ggDragLastY;
				me._thumbnail_menu.ggDragLastX = t[0].clientX;
				me._thumbnail_menu.ggDragLastY = t[0].clientY;
				me._thumbnail_menu.ggScrollByX(-diffX);
				me._thumbnail_menu.ggScrollByY(-diffY);
			}
		}
		elHorScrollBg = me._thumbnail_menu__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 400px; height: 15px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._thumbnail_menu__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 400px; height: 15px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		me._thumbnail_menu.ggScrollPosX = 0;
		me._thumbnail_menu.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbnail_menu.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._thumbnail_menu.ggDragLastX;
				me._thumbnail_menu.ggDragLastX = e.clientX;
				me._thumbnail_menu.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._thumbnail_menu.ggDragLastX = t[0].clientX;
			document.ontouchend = function() {
				document.ontouchend = null;
				document.ontouchmove = null;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
			var t = e.touches;
				var diffX = t[0].clientX - me._thumbnail_menu.ggDragLastX;
				me._thumbnail_menu.ggDragLastX = t[0].clientX;
				me._thumbnail_menu.ggScrollByX(diffX);
			}
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._thumbnail_menu.ggScrollWidth;
			if (e.offsetX < me._thumbnail_menu.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnail_menu.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._thumbnail_menu__horScrollBg.getBoundingClientRect();
			var diffX = me._thumbnail_menu.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._thumbnail_menu.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnail_menu.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			var wheelDelta = Math.sign(e.deltaX);
			me._thumbnail_menu.ggScrollByXSmooth(20 * wheelDelta);
		});
		elCornerBg = me._thumbnail_menu__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 15px; height: 15px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="thumbnail_menu";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 1px solid rgba(0, 0, 0, 0);';
		hs+='bottom : 65px;';
		hs+='height : 84px;';
		hs+='left : -10000px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 40%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_menu.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnail_menu.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._thumbnail_menu.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._thumbnail_menu.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._thumbnail_menu.style[domTransition]='left 0s, bottom 0s, opacity 500ms ease 0ms';
				if (me._thumbnail_menu.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._thumbnail_menu.style.bottom='80px';
					me._thumbnail_menu.ggUpdatePosition(true);
				}
				else {
					me._thumbnail_menu.ggDx=0;
					me._thumbnail_menu.style.bottom='65px';
					me._thumbnail_menu.ggUpdatePosition(true);
				}
			}
		}
		me._thumbnail_menu.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(player.getVariableValue('vis_thumbnail_menu') == false)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_menu.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_menu.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_menu.style[domTransition]='left 0s, bottom 0s, opacity 500ms ease 0ms';
				if (me._thumbnail_menu.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._thumbnail_menu.style.opacity == 0.0) { me._thumbnail_menu.style.visibility="hidden"; } }, 505);
					me._thumbnail_menu.style.opacity=0;
				}
				else {
					me._thumbnail_menu.style.visibility=me._thumbnail_menu.ggVisible?'inherit':'hidden';
					me._thumbnail_menu.style.opacity=1;
				}
			}
		}
		me._thumbnail_menu.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
			}
			{
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var clientWidthWithScale = this.getBoundingClientRect().width;
				var clientHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e.getBoundingClientRect) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes()) {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				var contentWidth = maxX - minX;
				var contentHeight = maxY - minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var containerWidth = clientWidthWithScale;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = (contentWidth/-2) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				var containerHeight = this.clientHeight;
				if (contentHeight < containerHeight) {
					this.ggContent.style.top = '50%';
					this.ggContent.style.marginTop = (contentHeight/-2) + 'px';
				}
				else {
					this.ggContent.style.top = this.ggContentTopOffset + 'px';
					this.ggContent.style.marginTop = '0px';
				}
				if (contentWidth > clientWidthWithScale) {
					me._thumbnail_menu__horScrollBg.style.visibility = 'inherit';
					me._thumbnail_menu__horScrollFg.style.visibility = 'inherit';
					me._thumbnail_menu.ggHorScrollVisible = true;
				} else {
					me._thumbnail_menu__horScrollBg.style.visibility = 'hidden';
					me._thumbnail_menu__horScrollFg.style.visibility = 'hidden';
					me._thumbnail_menu.ggHorScrollVisible = false;
				}
				if(me._thumbnail_menu.ggHorScrollVisible) {
					if (me._thumbnail_menu.ggVertScrollVisible) {
						me._thumbnail_menu.ggAvailableWidth = me._thumbnail_menu.clientWidth - 15;
						me._thumbnail_menu.ggAvailableWidthWithScale = me._thumbnail_menu.getBoundingClientRect().width - me._thumbnail_menu__horScrollBg.getBoundingClientRect().height;
					} else {
						me._thumbnail_menu.ggAvailableWidth = me._thumbnail_menu.clientWidth;
						me._thumbnail_menu.ggAvailableWidthWithScale = me._thumbnail_menu.getBoundingClientRect().width;
					}
					me._thumbnail_menu__horScrollBg.style.width = me._thumbnail_menu.ggAvailableWidth + 'px';
					me._thumbnail_menu.ggHPercentVisible = me._thumbnail_menu.ggAvailableWidthWithScale / contentWidth;
					if (me._thumbnail_menu.ggHPercentVisible > 1.0) me._thumbnail_menu.ggHPercentVisible = 1.0;
					me._thumbnail_menu.ggScrollWidth = Math.round(me._thumbnail_menu__horScrollBg.clientWidth * me._thumbnail_menu.ggHPercentVisible);
					me._thumbnail_menu__horScrollFg.style.width = me._thumbnail_menu.ggScrollWidth + 'px';
					me._thumbnail_menu.ggScrollPosX = me._thumbnail_menu.ggScrollPosXPercent * me._thumbnail_menu.ggAvailableWidth;
					me._thumbnail_menu.ggScrollPosX = Math.min(me._thumbnail_menu.ggScrollPosX, me._thumbnail_menu__horScrollBg.clientWidth - me._thumbnail_menu__horScrollFg.clientWidth);
					me._thumbnail_menu__horScrollFg.style.left = me._thumbnail_menu.ggScrollPosX + 'px';
					me._thumbnail_menu__content.style.left = -(Math.round(me._thumbnail_menu.ggScrollPosX / me._thumbnail_menu.ggHPercentVisible)) + this.ggContentLeftOffset + 'px';
				} else {
					me._thumbnail_menu.ggScrollPosX = 0;
					me._thumbnail_menu.ggScrollPosXPercent = 0.0;
				}
			}
		}
		el=me._thumbnail_cloner=document.createElement('div');
		el.ggNumRepeat = 1;
		el.ggWidth = 96;
		el.ggHeight = 62;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		me._thumbnail_cloner.callChildLogicBlocks_changenode = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._thumbnail_title.logicBlock_alpha) {
						me._thumbnail_cloner.ggInstances[i]._thumbnail_title.logicBlock_alpha();
					}
				}
			}
		}
		me._thumbnail_cloner.callChildLogicBlocks_mouseover = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._thumbnail_active.logicBlock_bordercolor) {
						me._thumbnail_cloner.ggInstances[i]._thumbnail_active.logicBlock_bordercolor();
					}
				}
			}
		}
		me._thumbnail_cloner.callChildLogicBlocks_mouseover = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._thumbnail_title.logicBlock_alpha) {
						me._thumbnail_cloner.ggInstances[i]._thumbnail_title.logicBlock_alpha();
					}
				}
			}
		}
		me._thumbnail_cloner.callChildLogicBlocks_active = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._checkmark_tick.logicBlock_visible) {
						me._thumbnail_cloner.ggInstances[i]._checkmark_tick.logicBlock_visible();
					}
					if (me._thumbnail_cloner.ggInstances[i]._thumbnail_active.logicBlock_bordercolor) {
						me._thumbnail_cloner.ggInstances[i]._thumbnail_active.logicBlock_bordercolor();
					}
				}
			}
		}
		me._thumbnail_cloner.callChildLogicBlocks_changevisitednodes = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._checkmark_tick.logicBlock_visible) {
						me._thumbnail_cloner.ggInstances[i]._checkmark_tick.logicBlock_visible();
					}
				}
			}
		}
		me._thumbnail_cloner.callChildLogicBlocks_varchanged_opt_thumbnail_menu_tooltip = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._thumbnail_title.logicBlock_alpha) {
						me._thumbnail_cloner.ggInstances[i]._thumbnail_title.logicBlock_alpha();
					}
				}
			}
		}
		el.ggUpdate = function(filter) {
			if(me._thumbnail_cloner.ggUpdating == true) return;
			me._thumbnail_cloner.ggUpdating = true;
			var el=me._thumbnail_cloner;
			el.ggInstances = [];
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			el.ggCurrentFilter = filter;
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var numRows = el.ggNumRepeat;
			if (numRows < 1) numRows = 1;
			for (var i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				if (filter.length > 0) {
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) == -1) passed = false;
					}
				}
				if (passed) {
				var parameter={};
				parameter.top=(row * me._thumbnail_cloner.ggHeight) + 'px';
				parameter.left=(column * me._thumbnail_cloner.ggWidth) + 'px';
				var inst = new SkinCloner_thumbnail_cloner_Class(nodeId, me, el, parameter);
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= numRows) {
					row = 0;
					column++;
				}
				}
			}
			me._thumbnail_cloner.callChildLogicBlocks_changenode();
			me._thumbnail_cloner.callChildLogicBlocks_mouseover();
			me._thumbnail_cloner.callChildLogicBlocks_mouseover();
			me._thumbnail_cloner.callChildLogicBlocks_active();
			me._thumbnail_cloner.callChildLogicBlocks_changevisitednodes();
			me._thumbnail_cloner.callChildLogicBlocks_varchanged_opt_thumbnail_menu_tooltip();
			me._thumbnail_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
		}
		el.ggFilter = [];
		el.ggId="thumbnail_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 62px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 96px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._thumbnail_cloner.childNodes.length; i++) {
				var child=me._thumbnail_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._thumbnail_cloner.ggUpdatePosition=function (useTransition) {
			var w=player.getViewerSize().width;
			var h=player.getViewerSize().height
			if ((!me._thumbnail_cloner.ggLastSize) || (me._thumbnail_cloner.ggLastSize.w!=w) || (me._thumbnail_cloner.ggLastSize.h!=h)) {
				me._thumbnail_cloner.ggLastSize={ w:w, h:h };
				me._thumbnail_cloner.ggUpdate();
			}
		}
		me._thumbnail_cloner.ggNodeChange=function () {
			me._thumbnail_cloner.ggUpdateConditionNodeChange();
		}
		me._thumbnail_menu__content.appendChild(me._thumbnail_cloner);
		me.divSkin.appendChild(me._thumbnail_menu);
		me._map.ggMarkerInstances=[];
		me._map.ggMapId = 'googleroadmap';
		me._map.ggLastNodeId=null;
		me._map.ggMarkerArray=[];
		me._map.ggGoogleMarkerArray=[];
		me._map.ggLastZoom = -1;
		me._map.ggTileAvailable=function(x, y, z) {
			var mapDetails = player.getMapDetails(me._map.ggMapId);
			if (z < 7 || z > 7 + (mapDetails['zoomlevels'] - 1)) return false;
			var mapAR = mapDetails['width'] / mapDetails['height'];
			if (mapDetails['width'] >= mapDetails['height']) {
			var tilesInX = Math.pow(2, z - 7);
			var tilesInY = Math.ceil(tilesInX / mapAR);
			} else {
				var tilesInY = Math.pow(2, z - 7);
				var tilesInX = Math.ceil(tilesInY * mapAR);
			}
			var tilesXStart = Math.pow(2, z - 1);
			var tilesYStart = tilesXStart;
			var tilesXEnd = tilesXStart + tilesInX - 1;
			var tilesYEnd = tilesYStart + tilesInY - 1;
			if (x < tilesXStart || x > tilesXEnd || y < tilesYStart || y > tilesYEnd) return false;
			return true;
		}
		me._map.ggInitMap=function(keepZoom) {
			me._map.ggMapNotLoaded = false;
			var mapType = player.getMapType(me._map.ggMapId);
			var mapDetails = player.getMapDetails(me._map.ggMapId);
			if (mapType == 'file') {
				me._map.style.backgroundColor = mapDetails['bgcolor'];
				me._map.ggFloorplanNorth = mapDetails['floorplannorth'];
			} else {
				me._map.style.backgroundColor = '#fff';
			}
			var gps;
			if (player.getMapType(me._map.ggMapId) == 'web') {
				gps=player.getNodeLatLng();
			} else {
				gps=player.getNodeMapCoords(null, me._map.ggMapId);
			}
			if ((typeof google !== 'object') || (typeof google.maps !== 'object')) return;
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
				activeNodeLatLng = new google.maps.LatLng(gps[0], gps[1]);
			} else {
				activeNodeLatLng = new google.maps.LatLng(0,0);
			}
			if (mapType == 'web') {
				var mapTypeId;
				if (me._map.ggMapId == 'googleroadmap') {
					mapTypeId = google.maps.MapTypeId.ROADMAP;
				} else if (me._map.ggMapId == 'googlehybrid') {
					mapTypeId = google.maps.MapTypeId.HYBRID;
				} else if (me._map.ggMapId == 'googlesatellite') {
					mapTypeId = google.maps.MapTypeId.SATELLITE;
				} else if (me._map.ggMapId == 'googleterrain') {
					mapTypeId = google.maps.MapTypeId.TERRAIN;
				} else {
					mapTypeId = mapDetails['mapprovider'];
				}
				if (me._map.ggLastZoom == -1) me._map.ggLastZoom = 16;
				var initZoom = keepZoom ? me._map.ggLastZoom : 16;
				var mapOptions = {
					zoom: initZoom,
					center: activeNodeLatLng,
					mapTypeId: mapTypeId,
					fullscreenControl: false,
					mapTypeControl: false,
					streetViewControl: false
				};
				me._map.ggMap = new google.maps.Map(me._map, mapOptions);
				if (mapTypeId == 'googlecustomstyle') {
					var styledMapType = new google.maps.StyledMapType(JSON.parse(mapDetails['googlecustomstylecode']), {name: 'Styled Map'});
					me._map.ggMap.mapTypes.set('styled_map', styledMapType);
					me._map.ggMap.setMapTypeId('styled_map');
				}
				if (mapTypeId == 'openstreetmap') {
					me._map.ggMap.mapTypes.set('openstreetmap', new google.maps.ImageMapType({
						getTileUrl: function(coord, zoom) {
							if (mapDetails['mapstyle'] == 'streets') {
								return 'http://tile.openstreetmap.org/' + zoom + '/' + coord.x + '/' + coord.y + '.png';
							} else if (mapDetails['mapstyle'] == 'outdoors') {
								return 'http://a.tile.opentopomap.org/' + zoom + '/' + coord.x + '/' + coord.y + '.png';
							}
						},
						tileSize: new google.maps.Size(256, 256),
						name: mapDetails['title'],
						maxZoom: mapDetails['mapstyle'] == 'outdoors' ? 17 : 18
					}));
				}
				if (mapTypeId == 'mapbox') {
					me._map.ggMap.mapTypes.set('mapbox', new google.maps.ImageMapType({
						getTileUrl: function(coord, zoom) {
							if (mapDetails['styleurl'] == '') {
								return 'https://api.mapbox.com/v4/mapbox.' + mapDetails['mapstyle'] + '/' + zoom + '/' + coord.x + '/' + coord.y + '@2x.png?access_token=' + mapDetails['mapkey'];
							} else {
								var styleurlstring = mapDetails['styleurl'];
								styleurlstring = styleurlstring.slice(styleurlstring.indexOf('styles/') + 7);
								return 'https://api.mapbox.com/styles/v1/' + styleurlstring + '/tiles/256/' + zoom + '/' + coord.x + '/' + coord.y + '@2x?access_token=' + mapDetails['mapkey'];
							}
						},
						tileSize: new google.maps.Size(256, 256),
						name: mapDetails['title'],
						maxZoom: 18
					}));
				}
				if (mapTypeId == 'custom') {
					me._map.ggMap.mapTypes.set('custom', new google.maps.ImageMapType({
						getTileUrl: function(coord, zoom) {
							var urlString = mapDetails['mapurltemplate'];
							urlString = urlString.replace('{s}', 'a');
							urlString = urlString.replace('{z}', zoom);
							urlString = urlString.replace('{x}', coord.x);
							urlString = urlString.replace('{y}', coord.y);
							return urlString;
						},
						tileSize: new google.maps.Size(256, 256),
						name: mapDetails['title'],
						maxZoom: mapDetails['mapmaxzoom']
					}));
				}
			} else if (mapType == 'file') {
				if (me._map.ggLastZoom == -1) me._map.ggLastZoom = 7;
				var initZoom = keepZoom ? me._map.ggLastZoom : 7;
				var mapOptions = {
				  backgroundColor: mapDetails['bgcolor'],
					zoom: initZoom,
					minZoom: 7,
					maxZoom: 7 + (mapDetails['zoomlevels'] - 1) + 0,
					center: activeNodeLatLng,
					fullscreenControl: false,
					mapTypeControl: false,
					streetViewControl: false
				};
				me._map.ggMap = new google.maps.Map(me._map, mapOptions);
				var customMapType = new google.maps.ImageMapType({
					getTileUrl: function(coord, zoom) {
						if (me._map.ggTileAvailable(coord.x, coord.y, zoom)) {
							return basePath + 'images/maptiles/' + me._map.ggMapId + '/' + zoom + '/' + coord.x + '_' + coord.y + '.' + mapDetails['tileformat'];
						} else {
							return null;
						}
					},
					tileSize: new google.maps.Size(256, 256),
					minZoom: 7,
					maxZoom: 7 + mapDetails['zoomlevels'],
					name: mapDetails['title'],
				});
				me._map.ggMap.mapTypes.set(me._map.ggMapId, customMapType);
				me._map.ggMap.setMapTypeId(me._map.ggMapId);
				google.maps.event.addListener(me._map.ggMap, 'center_changed', function() {
					me._map.ggCheckBounds(mapDetails);
				});
				google.maps.event.addListener(me._map.ggMap, 'zoom_changed', function() {
					me._map.ggCheckBounds(mapDetails);
				});
			}
		}
		me._map.ggClearMap=function() {
		me._map.ggMap = null;
		me._map.ggClearMapMarkers();
		me._map.ggMapNotLoaded = true;
		}
		me._map.ggClearMapMarkers=function() {
			me._map.ggLastActivMarker = null;
			var id,marker;
			var markers=me._map.ggGoogleMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					marker.setMap(null);
				}
			}
			me._map.ggGoogleMarkerArray=[];
		}
		me._map.ggCenterNode=function() {
			if (!me._map.ggMap) return;
			var gps;
			if (player.getMapType(me._map.ggMapId) == 'web') {
				gps=player.getNodeLatLng();
			} else {
				gps=player.getNodeMapCoords(null, me._map.ggMapId);
			}
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
				var markerLocation = new google.maps.LatLng(gps[0], gps[1]);
				me._map.ggMap.panTo(markerLocation);
			}
		}
		me._map.ggFitBounds=function(force) {
			if (!me._map.ggMarkerBounds.isEmpty()) {
				if (me._map.ggMarkerInstances.length > 1 || Object.getOwnPropertyNames(me._map.ggGoogleMarkerArray).length > 1) {
					if (force) {
					me._map.ggMap.fitBounds(me._map.ggMarkerBounds, 30);
					} else {
						if (player.getMapType(me._map.ggMapId) == 'web') {
							me._map.ggMap.setZoom(16);
						} else {
							me._map.ggMap.setZoom(7 + 16);
						}
					}
				} else {
					me._map.ggMap.setCenter(me._map.ggMarkerBounds.getCenter());
					if (player.getMapType(me._map.ggMapId) == 'web') {
						if (force) {
						me._map.ggMap.setZoom(18);
						} else {
							me._map.ggMap.setZoom(16);
						}
					} else {
						if (force) {
						me._map.ggMap.setZoom(7);
						} else {
							me._map.ggMap.setZoom(7 + 16);
						}
					}
				}
			}
		}
		me._map.ggInitMapMarkers=function(updateMapBounds) {
			me._map.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map.ggFilteredIds = [];
			if (me._map.ggFilter != '') {
				var filter = me._map.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map.ggFilteredIds.length > 0) ids = me._map.ggFilteredIds;
			}
			var marker;
			var markerLocation;
			me._map.ggMarkerBounds = new google.maps.LatLngBounds();
			var currentId = player.getCurrentNode();
			for(var i=0;i<ids.length;i++) {
				var id=ids[i];
				var gps;
				if (player.getMapType(me._map.ggMapId) == 'web') {
					gps=player.getNodeLatLng(id);
				} else {
					gps=player.getNodeMapCoords(id, me._map.ggMapId);
				}
				if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
					markerLocation = new google.maps.LatLng(gps[0], gps[1]);
					marker = new google.maps.Marker({position: markerLocation,map: me._map.ggMap});
					marker.setTitle(player.getNodeTitle(id));
					marker.setClickable(true);
					marker.ggId=id;
					google.maps.event.addListener(marker, 'click', function() {
						player.openNext('{' + this.ggId + '}');
						activeNodeLatLng=me.position;
						lastFov=-1; // force radar update
					});
					me._map.ggGoogleMarkerArray[id] = marker;
					me._map.ggMarkerBounds.extend(markerLocation);
				}
			}
			if (ids.length > 1 && !me._map.ggMarkerBounds.isEmpty() && updateMapBounds) {
				me._map.ggFitBounds(false);
			}
			skin.updateSize(me._map);
			this.ggLastActivMarker = null;
			if (this.ggUpdateConditionNodeChange) this.ggUpdateConditionNodeChange();
		}
		me._map.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'file') {
				return;
			}
			if (me._map.ggMap) {
				me._map.ggLastZoom = me._map.ggMap.getZoom();
			}
			me._map.ggMapId = mapId;
			me._map.ggClearMap();
			me._map.ggInitMap(true);
			me._map.ggInitMapMarkers(false);
		}
		me._map.ggInCheckBounds=false;
		me._map.ggCheckBounds=function(mapDetails) {
			var mapAR = mapDetails['width'] / mapDetails['height'];
			var tileInDeg = 360.0 / Math.pow(2, 7);
			if (mapDetails['width'] >= mapDetails['height']) {
				var tmpWidth = mapDetails['width'];
				while (tmpWidth > 256) {
					tmpWidth /= 2;
				}
				var mapWidthInDeg = tileInDeg * (tmpWidth / 256);
			var mapHeightInDeg = mapWidthInDeg / mapAR;
			} else {
				var tmpHeight = mapDetails['height'];
				while (tmpHeight > 256) {
					tmpHeight /= 2;
				}
				var mapHeightInDeg = tileInDeg * (tmpHeight / 256);
				var mapWidthInDeg = mapHeightInDeg * mapAR;
			}
			if (me._map.ggInCheckBounds) return;
			me._map.ggInCheckBounds = true;
			var mapCenter = me._map.ggMap.getCenter();
			var currentZoom = me._map.ggMap.getZoom();
			var pixelInDeg = 360.0 / (Math.pow(2, currentZoom) * 256)
			var xOffset = (me._map.clientWidth / 2.0) * pixelInDeg;
			var yOffset = (me._map.clientHeight / 2.0) * pixelInDeg;
			var x = mapCenter.lng();
			var y = mapCenter.lat();
			if (mapWidthInDeg < me._map_1.clientWidth * pixelInDeg) {
				x = mapWidthInDeg / 2;
			} else {
			if (x > mapWidthInDeg - xOffset) x = mapWidthInDeg - xOffset;
			if (x < xOffset) x = xOffset;
			}
			if (mapHeightInDeg < me._map_1.clientHeight * pixelInDeg) {
				y = -mapHeightInDeg / 2;
			} else {
			if (y < -mapHeightInDeg + yOffset) y = -mapHeightInDeg + yOffset;
			if (y > -yOffset) y = -yOffset;
			}
			me._map.ggMap.setCenter(new google.maps.LatLng(y, x));
			me._map.ggInCheckBounds = false;
		}
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
		player.addListener('configloaded', function() {
			me._map.ggInitMap(false);
			me._map.ggInitMapMarkers(true);
			me._thumbnail_cloner.ggUpdate();
		});
		player.addListener('imagesready', function() {
			me._thumbnail_menu.ggUpdatePosition();
		});
	};
	this.hotspotProxyClick=function(id, url) {
		if (id=='PolyHoodL5') {
			me._vehiclel5hood.onclick();
		}
		if (id=='PolyHoodL4') {
			me._vehiclel4hood.onclick();
		}
		if (id=='PolyHoodL2') {
			me._vehiclel2hood.onclick();
		}
		if (id=='PolyHoodL1') {
			me._vehiclel1hood.onclick();
		}
		if (id=='PolyHoodR5') {
			me._vehicler5hood.onclick();
		}
		if (id=='PolyHoodR3') {
			me._vehicler3hood.onclick();
		}
		if (id=='PolyHoodR2') {
			me._vehicler2hood.onclick();
		}
		if (id=='PolyHoodR1') {
			me._vehicler1hood.onclick();
		}
		if (id=='PolyHood2') {
			me._vehicle2hood.onclick();
		}
		if (id=='PolyHood1') {
			me._vehicle1hood.onclick();
		}
		if (id=='PolyVehicleL5') {
			me._vehiclel5interior.onclick();
		}
		if (id=='PolyVehicleL4') {
			me._vehiclel4interior.onclick();
		}
		if (id=='PolyVehicleL1') {
			me._vehiclel1interior.onclick();
		}
		if (id=='PolyVehicleR5') {
			me._vehicler5interior.onclick();
		}
		if (id=='PolyVehicleR3') {
			me._vehicler3interior.onclick();
		}
		if (id=='PolyVehicleR2') {
			me._vehicler2interior.onclick();
		}
		if (id=='PolyVehicleR1') {
			me._vehicler1interior.onclick();
		}
		if (id=='PolyVehicle2a') {
			me._vehicle2interiorside.onclick();
		}
		if (id=='PolyVehicle2') {
			me._vehicle2interior.onclick();
		}
		if (id=='PolyVehicle1') {
			me._vehicle1interior.onclick();
		}
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
		if (id=='PolyHoodL5') {
			me._vehiclel5hood.onmouseover();
		}
		if (id=='PolyHoodL4') {
			me._vehiclel4hood.onmouseover();
		}
		if (id=='PolyHoodL2') {
			me._vehiclel2hood.onmouseover();
		}
		if (id=='PolyHoodL1') {
			me._vehiclel1hood.onmouseover();
		}
		if (id=='PolyHoodR5') {
			me._vehicler5hood.onmouseover();
		}
		if (id=='PolyHoodR3') {
			me._vehicler3hood.onmouseover();
		}
		if (id=='PolyHoodR2') {
			me._vehicler2hood.onmouseover();
		}
		if (id=='PolyHoodR1') {
			me._vehicler1hood.onmouseover();
		}
		if (id=='PolyHood2') {
			me._vehicle2hood.onmouseover();
		}
		if (id=='PolyHood1') {
			me._vehicle1hood.onmouseover();
		}
		if (id=='PolyVehicleL5') {
			me._vehiclel5interior.onmouseover();
		}
		if (id=='PolyVehicleL4') {
			me._vehiclel4interior.onmouseover();
		}
		if (id=='PolyVehicleL1') {
			me._vehiclel1interior.onmouseover();
		}
		if (id=='PolyVehicleR5') {
			me._vehicler5interior.onmouseover();
		}
		if (id=='PolyVehicleR3') {
			me._vehicler3interior.onmouseover();
		}
		if (id=='PolyVehicleR2') {
			me._vehicler2interior.onmouseover();
		}
		if (id=='PolyVehicleR1') {
			me._vehicler1interior.onmouseover();
		}
		if (id=='PolyVehicle2a') {
			me._vehicle2interiorside.onmouseover();
		}
		if (id=='PolyVehicle2') {
			me._vehicle2interior.onmouseover();
		}
		if (id=='PolyVehicle1') {
			me._vehicle1interior.onmouseover();
		}
	}
	me.hotspotProxyOut=function(id, url) {
		if (id=='PolyHoodL5') {
			me._vehiclel5hood.onmouseout();
		}
		if (id=='PolyHoodL4') {
			me._vehiclel4hood.onmouseout();
		}
		if (id=='PolyHoodL2') {
			me._vehiclel2hood.onmouseout();
		}
		if (id=='PolyHoodL1') {
			me._vehiclel1hood.onmouseout();
		}
		if (id=='PolyHoodR5') {
			me._vehicler5hood.onmouseout();
		}
		if (id=='PolyHoodR3') {
			me._vehicler3hood.onmouseout();
		}
		if (id=='PolyHoodR2') {
			me._vehicler2hood.onmouseout();
		}
		if (id=='PolyHoodR1') {
			me._vehicler1hood.onmouseout();
		}
		if (id=='PolyHood2') {
			me._vehicle2hood.onmouseout();
		}
		if (id=='PolyHood1') {
			me._vehicle1hood.onmouseout();
		}
		if (id=='PolyVehicleL5') {
			me._vehiclel5interior.onmouseout();
		}
		if (id=='PolyVehicleL4') {
			me._vehiclel4interior.onmouseout();
		}
		if (id=='PolyVehicleL1') {
			me._vehiclel1interior.onmouseout();
		}
		if (id=='PolyVehicleR5') {
			me._vehicler5interior.onmouseout();
		}
		if (id=='PolyVehicleR3') {
			me._vehicler3interior.onmouseout();
		}
		if (id=='PolyVehicleR2') {
			me._vehicler2interior.onmouseout();
		}
		if (id=='PolyVehicleR1') {
			me._vehicler1interior.onmouseout();
		}
		if (id=='PolyVehicle2a') {
			me._vehicle2interiorside.onmouseout();
		}
		if (id=='PolyVehicle2') {
			me._vehicle2interior.onmouseout();
		}
		if (id=='PolyVehicle1') {
			me._vehicle1interior.onmouseout();
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_sizechanged = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._hs_tt.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._hs_tt.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_changenode = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._hs_preview_image.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._hs_preview_image.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._hs_tt.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._hs_tt.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_configloaded = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._hs_preview_image.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._hs_preview_image.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_mouseover = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._chevron_white_lower.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._chevron_white_lower.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._chevron_black.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._chevron_black.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._chevron_white.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._chevron_white.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._hs_preview_image.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._hs_preview_image.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_active = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._hs_visited.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._hs_visited.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_changevisitednodes = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._hs_visited.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._hs_visited.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_varchanged_opt_3d_preview = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._hs_preview_image.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._hs_preview_image.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_changenode = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible();
				}
				if (hotspotTemplates['ht_info'][i]._ht_info_image.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._ht_info_image.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_configloaded = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._tt_information.logicBlock_position) {
					hotspotTemplates['ht_info'][i]._tt_information.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_mouseover = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._tt_information.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._tt_information.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_intr_popup = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_hud_popup = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_info_popup = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._ht_info_image.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._ht_info_image.logicBlock_visible();
				}
			}
		}
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
		if (me.elementMouseOver['vehiclel5hood']) {
			me._hoodtt.style[domTransition]='none';
			me._hoodtt.style.opacity='1';
			me._hoodtt.style.visibility=me._hoodtt.ggVisible?'inherit':'hidden';
		}
		if (me.elementMouseOver['vehiclel4hood']) {
			me._hoodtt.style[domTransition]='none';
			me._hoodtt.style.opacity='1';
			me._hoodtt.style.visibility=me._hoodtt.ggVisible?'inherit':'hidden';
		}
		if (me.elementMouseOver['vehiclel2hood']) {
			me._hoodtt.style[domTransition]='none';
			me._hoodtt.style.opacity='1';
			me._hoodtt.style.visibility=me._hoodtt.ggVisible?'inherit':'hidden';
		}
		if (me.elementMouseOver['vehiclel1hood']) {
			me._hoodtt.style[domTransition]='none';
			me._hoodtt.style.opacity='1';
			me._hoodtt.style.visibility=me._hoodtt.ggVisible?'inherit':'hidden';
		}
		if (me.elementMouseOver['vehicler5hood']) {
			me._hoodtt.style[domTransition]='none';
			me._hoodtt.style.opacity='1';
			me._hoodtt.style.visibility=me._hoodtt.ggVisible?'inherit':'hidden';
		}
		if (me.elementMouseOver['vehicler3hood']) {
			me._hoodtt.style[domTransition]='none';
			me._hoodtt.style.opacity='1';
			me._hoodtt.style.visibility=me._hoodtt.ggVisible?'inherit':'hidden';
		}
		if (me.elementMouseOver['vehicler2hood']) {
			me._hoodtt.style[domTransition]='none';
			me._hoodtt.style.opacity='1';
			me._hoodtt.style.visibility=me._hoodtt.ggVisible?'inherit':'hidden';
		}
		if (me.elementMouseOver['vehicler1hood']) {
			me._hoodtt.style[domTransition]='none';
			me._hoodtt.style.opacity='1';
			me._hoodtt.style.visibility=me._hoodtt.ggVisible?'inherit':'hidden';
		}
		if (me.elementMouseOver['vehicle2hood']) {
			me._hoodtt.style[domTransition]='none';
			me._hoodtt.style.opacity='1';
			me._hoodtt.style.visibility=me._hoodtt.ggVisible?'inherit':'hidden';
		}
		if (me.elementMouseOver['vehicle1hood']) {
			me._hoodtt.style[domTransition]='none';
			me._hoodtt.style.opacity='1';
			me._hoodtt.style.visibility=me._hoodtt.ggVisible?'inherit':'hidden';
		}
		if (me.elementMouseOver['vehiclel5interior']) {
			me._interiortt.style[domTransition]='none';
			me._interiortt.style.opacity='1';
			me._interiortt.style.visibility=me._interiortt.ggVisible?'inherit':'hidden';
		}
		if (me.elementMouseOver['vehiclel4interior']) {
			me._interiortt.style[domTransition]='none';
			me._interiortt.style.opacity='1';
			me._interiortt.style.visibility=me._interiortt.ggVisible?'inherit':'hidden';
		}
		if (me.elementMouseOver['vehiclel1interior']) {
			me._interiortt.style[domTransition]='none';
			me._interiortt.style.opacity='1';
			me._interiortt.style.visibility=me._interiortt.ggVisible?'inherit':'hidden';
		}
		if (me.elementMouseOver['vehicler5interior']) {
			me._interiortt.style[domTransition]='none';
			me._interiortt.style.opacity='1';
			me._interiortt.style.visibility=me._interiortt.ggVisible?'inherit':'hidden';
		}
		if (me.elementMouseOver['vehicler3interior']) {
			me._interiortt.style[domTransition]='none';
			me._interiortt.style.opacity='1';
			me._interiortt.style.visibility=me._interiortt.ggVisible?'inherit':'hidden';
		}
		if (me.elementMouseOver['vehicler2interior']) {
			me._interiortt.style[domTransition]='none';
			me._interiortt.style.opacity='1';
			me._interiortt.style.visibility=me._interiortt.ggVisible?'inherit':'hidden';
		}
		if (me.elementMouseOver['vehicler1interior']) {
			me._interiortt.style[domTransition]='none';
			me._interiortt.style.opacity='1';
			me._interiortt.style.visibility=me._interiortt.ggVisible?'inherit':'hidden';
		}
		if (me.elementMouseOver['vehicle2interiorside']) {
			me._interiortt.style[domTransition]='none';
			me._interiortt.style.opacity='1';
			me._interiortt.style.visibility=me._interiortt.ggVisible?'inherit':'hidden';
		}
		if (me.elementMouseOver['vehicle2interior']) {
			me._interiortt.style[domTransition]='none';
			me._interiortt.style.opacity='1';
			me._interiortt.style.visibility=me._interiortt.ggVisible?'inherit':'hidden';
		}
		if (me.elementMouseOver['vehicle1interior']) {
			me._interiortt.style[domTransition]='none';
			me._interiortt.style.opacity='1';
			me._interiortt.style.visibility=me._interiortt.ggVisible?'inherit':'hidden';
		}
		var hs='';
		if (me._hoodtt.ggParameter) {
			hs+=parameterToTransform(me._hoodtt.ggParameter) + ' ';
		}
		hs+='translate(' + (1 * player.mouse.x + 0) + 'px,0px) ';
		hs+='translate(0px,' + (1 * player.mouse.y + 0) + 'px) ';
		me._hoodtt.style[domTransform]=hs;
		var hs='';
		if (me._interiortt.ggParameter) {
			hs+=parameterToTransform(me._interiortt.ggParameter) + ' ';
		}
		hs+='translate(' + (1 * player.mouse.x + 0) + 'px,0px) ';
		hs+='translate(0px,' + (1 * player.mouse.y + 0) + 'px) ';
		me._interiortt.style[domTransform]=hs;
	};
	player.addListener('timer', me.skinTimerEvent);
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 71px;';
		hs+='position : absolute;';
		hs+='top : 220px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		hs+='transform-style: preserve-3d;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._ht_node.onclick=function (e) {
			player.openNext(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			me._chevron_white_lower.logicBlock_alpha();
			me._chevron_black.logicBlock_alpha();
			me._chevron_white.logicBlock_alpha();
			me._hs_preview_image.logicBlock_alpha();
			me._tt_ht_3d.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node']=false;
			me._chevron_white_lower.logicBlock_alpha();
			me._chevron_black.logicBlock_alpha();
			me._chevron_white.logicBlock_alpha();
			me._hs_preview_image.logicBlock_alpha();
			me._tt_ht_3d.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.ontouchend=function (e) {
			me.elementMouseOver['ht_node']=false;
			me._chevron_white_lower.logicBlock_alpha();
			me._chevron_black.logicBlock_alpha();
			me._chevron_white.logicBlock_alpha();
			me._hs_preview_image.logicBlock_alpha();
			me._tt_ht_3d.logicBlock_visible();
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._chevron_white_lower=document.createElement('div');
		els=me._chevron_white_lower__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMDAgMTAwMDsiIHhtbDpzcG'+
			'FjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNGRkZGRkY7fQo8L3N0eWxlPgo8Zz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zNC45LDQzOS43bDQwMC00MDFjMTcuOS0xNy45LDQxLjctMjUuNCw2NS4yLTI0YzIzLjQtMS40LDQ3LjIsNi4xLDY1LjEsMjRsNDAwLDQwMQoJCWMzMy4yLDMzLjMsMzMuMiw4Ny40LDAsMTIwLjdjLTMzLjIsMzMuMy04Ny4xLDMzLjMtMTIwLjQsMEw1MDAsMjE0LjdMMTU1LjIsNTYwLjRjLTMzLjIsMzMuMy04Ny4xLDMzLjMtMTIwLjQsMAoJCVMxLjcsNDczLDM0LjksNDM5Ljd6Ii8+CjwvZz4KPC9zdmc+Cg==';
		me._chevron_white_lower__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;chevron_white_lower;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevron_white_lower";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.6;';
		hs+='position : absolute;';
		hs+='top : -140px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		hs+='transform:translate3d(0px,0px,-1px);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._chevron_white_lower.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_white_lower.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.elementMouseOver['ht_node'] == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_white_lower.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_white_lower.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_white_lower.style[domTransition]='opacity 500ms ease 0ms';
				if (me._chevron_white_lower.ggCurrentLogicStateAlpha == 0) {
					me._chevron_white_lower.style.visibility=me._chevron_white_lower.ggVisible?'inherit':'hidden';
					me._chevron_white_lower.style.opacity=1;
				}
				else {
					me._chevron_white_lower.style.visibility=me._chevron_white_lower.ggVisible?'inherit':'hidden';
					me._chevron_white_lower.style.opacity=0.6;
				}
			}
		}
		me._chevron_white_lower.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_node.appendChild(me._chevron_white_lower);
		el=me._chevron_black=document.createElement('div');
		els=me._chevron_black__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMDAgMTAwMDsiIHhtbDpzcG'+
			'FjZT0icHJlc2VydmUiPgo8Zz4KCTxwYXRoIGQ9Ik0zNC45LDQzOS43bDQwMC00MDFjMTcuOS0xNy45LDQxLjctMjUuNCw2NS4yLTI0YzIzLjQtMS40LDQ3LjIsNi4xLDY1LjEsMjRsNDAwLDQwMWMzMy4yLDMzLjMsMzMuMiw4Ny40LDAsMTIwLjcKCQljLTMzLjIsMzMuMy04Ny4xLDMzLjMtMTIwLjQsMEw1MDAsMjE0LjdMMTU1LjIsNTYwLjRjLTMzLjIsMzMuMy04Ny4xLDMzLjMtMTIwLjQsMFMxLjcsNDczLDM0LjksNDM5Ljd6Ii8+CjwvZz4KPC9zdmc+Cg==';
		me._chevron_black__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;chevron_black;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevron_black";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.4;';
		hs+='position : absolute;';
		hs+='top : -140px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._chevron_black.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_black.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.elementMouseOver['ht_node'] == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_black.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_black.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_black.style[domTransition]='opacity 500ms ease 0ms';
				if (me._chevron_black.ggCurrentLogicStateAlpha == 0) {
					me._chevron_black.style.visibility=me._chevron_black.ggVisible?'inherit':'hidden';
					me._chevron_black.style.opacity=1;
				}
				else {
					me._chevron_black.style.visibility=me._chevron_black.ggVisible?'inherit':'hidden';
					me._chevron_black.style.opacity=0.4;
				}
			}
		}
		me._chevron_black.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_node.appendChild(me._chevron_black);
		el=me._chevron_white=document.createElement('div');
		els=me._chevron_white__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMDAgMTAwMDsiIHhtbDpzcG'+
			'FjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNGRkZGRkY7fQo8L3N0eWxlPgo8Zz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zNC45LDQzOS43bDQwMC00MDFjMTcuOS0xNy45LDQxLjctMjUuNCw2NS4yLTI0YzIzLjQtMS40LDQ3LjIsNi4xLDY1LjEsMjRsNDAwLDQwMQoJCWMzMy4yLDMzLjMsMzMuMiw4Ny40LDAsMTIwLjdjLTMzLjIsMzMuMy04Ny4xLDMzLjMtMTIwLjQsMEw1MDAsMjE0LjdMMTU1LjIsNTYwLjRjLTMzLjIsMzMuMy04Ny4xLDMzLjMtMTIwLjQsMAoJCVMxLjcsNDczLDM0LjksNDM5Ljd6Ii8+CjwvZz4KPC9zdmc+Cg==';
		me._chevron_white__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;chevron_white;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevron_white";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.6;';
		hs+='position : absolute;';
		hs+='top : -140px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		hs+='transform:translate3d(0px,0px,1px);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._chevron_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_white.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.elementMouseOver['ht_node'] == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_white.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_white.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_white.style[domTransition]='opacity 500ms ease 0ms';
				if (me._chevron_white.ggCurrentLogicStateAlpha == 0) {
					me._chevron_white.style.visibility=me._chevron_white.ggVisible?'inherit':'hidden';
					me._chevron_white.style.opacity=1;
				}
				else {
					me._chevron_white.style.visibility=me._chevron_white.ggVisible?'inherit':'hidden';
					me._chevron_white.style.opacity=0.6;
				}
			}
		}
		me._chevron_white.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_node.appendChild(me._chevron_white);
		el=me._hs_preview_image=document.createElement('div');
		els=me._hs_preview_image__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/hs_preview_image_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;hs_preview_image;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hs_preview_image";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='z-index: -5;';
		hs+='height : 90px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -220px;';
		hs+='visibility : hidden;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		hs+='border-radius: 5px; overflow: hidden; box-shadow: 0px 0px 2px #000000; transform:translate3d(0px,0px,90px) rotateX(-90deg) scale(1.5); transform-style: preserve-3d; -webkit-backface-visibility: hidden; backface-visibility: hidden;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hs_preview_image.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._hs_preview_image.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.elementMouseOver['ht_node'] == true) && 
				(player.getVariableValue('opt_3d_preview') == true) && 
				(player.getIsTour() == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hs_preview_image.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hs_preview_image.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hs_preview_image.style[domTransition]='opacity 500ms ease 0ms';
				if (me._hs_preview_image.ggCurrentLogicStateAlpha == 0) {
					me._hs_preview_image.style.visibility=me._hs_preview_image.ggVisible?'inherit':'hidden';
					me._hs_preview_image.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._hs_preview_image.style.opacity == 0.0) { me._hs_preview_image.style.visibility="hidden"; } }, 505);
					me._hs_preview_image.style.opacity=0;
				}
			}
		}
		me._hs_preview_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._hs_tt=document.createElement('div');
		els=me._hs_tt__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="hs_tt";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 140px;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.196078);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._hs_tt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_tt.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getVariableValue('opt_3d_tooltip') == false) && 
				(me.hotspot.title == "")
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_tt.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_tt.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_tt.style[domTransition]='';
				if (me._hs_tt.ggCurrentLogicStateVisible == 0) {
					me._hs_tt.style.visibility="hidden";
					me._hs_tt.ggVisible=false;
				}
				else {
					me._hs_tt.style.visibility=(Number(me._hs_tt.style.opacity)>0||!me._hs_tt.style.opacity)?'inherit':'hidden';
					me._hs_tt.ggVisible=true;
				}
			}
		}
		me._hs_tt.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._hs_preview_image.appendChild(me._hs_tt);
		el=me._hs_visited=document.createElement('div');
		els=me._hs_visited__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgLTI0MCAzMzIgMTMwIDEzMD'+
			'siIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6IzAwMDAwMDt9DQoJLnN0MXtmaWxsOiNGRkZGRkY7fQ0KPC9zdHlsZT4NCjxnIGlkPSJMYXllcl8xXzFfIj4NCjwvZz4NCjxnIGlkPSJMYXllcl8yIj4NCgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNLTEyMi4xLDM0MS41aC0xMDUuOGMtMS40LDAtMi42LDEuMS0yLjYsMi42djEwNS44YzAsMS40LDEuMSwyLjYsMi42LDIuNmgxMDUuOGMxLjQsMCwyLjYtMS4xLDIuNi0yLjZWMzQ0LjENCgkJQy0xMTkuNiwzNDIuNy0xMjAuNywzNDEuNS0xMjIuMSwzNDEuNXogTS0xMzIuOCwzODEuN2wtNTAu'+
			'OCw1MC44Yy0wLjMsMC4zLTAuOCwwLjUtMS4yLDAuNWMtMC41LDAtMC45LTAuMS0xLjMtMC41bC0zMS43LTMxLjgNCgkJYy0wLjctMC43LTAuNy0xLjcsMC0yLjRsMTIuNS0xMi41YzAuNy0wLjcsMS43LTAuNywyLjQsMGwxOCwxOGwzNy4xLTM3LjFjMC43LTAuNywxLjctMC43LDIuNCwwbDEyLjUsMTIuNQ0KCQlDLTEzMi4xLDM3OS45LTEzMi4xLDM4MS0xMzIuOCwzODEuN3oiLz4NCgk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNLTE0Ny43LDM2Ni44bC0zNy4xLDM3LjFsLTE4LTE4Yy0wLjctMC43LTEuNy0wLjctMi40LDBsLTEyLjUsMTIuNWMtMC43LDAuNy0wLjcsMS43LDAsMi40bDMxLjcsMzEuOA'+
			'0KCQljMC4zLDAuMywwLjgsMC41LDEuMywwLjVjMC40LDAsMC45LTAuMiwxLjItMC41bDUwLjgtNTAuOWMwLjctMC43LDAuNy0xLjcsMC0yLjRsLTEyLjUtMTIuNUMtMTQ1LjksMzY2LjEtMTQ3LDM2Ni4xLTE0Ny43LDM2Ni44eiINCgkJLz4NCjwvZz4NCjwvc3ZnPg0K';
		me._hs_visited__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;hs_visited;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hs_visited";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 5px;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hs_visited.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_visited.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me._hs_visited.ggIsActive() == true) || 
				(player.nodeVisited(me._hs_visited.ggElementNodeId()) == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_visited.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_visited.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_visited.style[domTransition]='';
				if (me._hs_visited.ggCurrentLogicStateVisible == 0) {
					me._hs_visited.style.visibility=(Number(me._hs_visited.style.opacity)>0||!me._hs_visited.style.opacity)?'inherit':'hidden';
					me._hs_visited.ggVisible=true;
				}
				else {
					me._hs_visited.style.visibility="hidden";
					me._hs_visited.ggVisible=false;
				}
			}
		}
		me._hs_visited.ggUpdatePosition=function (useTransition) {
		}
		me._hs_preview_image.appendChild(me._hs_visited);
		me._ht_node.appendChild(me._hs_preview_image);
		el=me.__code=document.createElement('div');
		els=me.__code__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="_code";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 37px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -39px;';
		hs+='visibility : hidden;';
		hs+='width : 66px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 68px;';
		hs+='height: 39px;';
		hs+='pointer-events: none;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
this.onUpdatePosition=function(player,hotspot) {
var vs=player.getViewerSize();
var y=vs.height * (1/6*(1+Math.cos(player.getTilt() * Math.PI/90.0)));
var hs= 'perspective(500px) translate3d(0px,' + (y) + 'px,0px) ';
hs += 'rotateZ(' + ( player.getRoll()).toFixed(10) + 'deg) ';
hs += 'rotateX(' + ( player.getTilt()).toFixed(10) + 'deg) ';
hs += 'rotateY(' + (-player.getPan()).toFixed(10)  + 'deg) ';
hs += 'rotateY(' + ( hotspot.pan).toFixed(2)  + 'deg) ';
hs += 'rotateX(' + (-hotspot.tilt).toFixed(2) + 'deg) ';
hs += 'rotateX(90deg) ';
this.__div.style.transform=hs;
this.__div.style.left = vs.width / 2 + "px";
this.__div.style.top = vs.height / 2 + "px";
};
		el.appendChild(els);
		me.__code.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__code.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me.__code);
		el=me._tt_ht_3d=document.createElement('div');
		els=me._tt_ht_3d__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_3d";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -170px;';
		hs+='visibility : hidden;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		hs+='transform:translate3d(0px,0px,40px) rotateX(-90deg); font-size: 15px; -webkit-backface-visibility: hidden; backface-visibility: hidden;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.666667);';
		hs+='border: 1px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_3d.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_3d.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getIsTour() == false) && 
				(me.hotspot.title != "") && 
				(me.elementMouseOver['ht_node'] == true) && 
				(player.getVariableValue('opt_3d_preview') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_3d.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_3d.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_3d.style[domTransition]='';
				if (me._tt_ht_3d.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_3d.style.visibility=(Number(me._tt_ht_3d.style.opacity)>0||!me._tt_ht_3d.style.opacity)?'inherit':'hidden';
					me._tt_ht_3d.ggVisible=true;
				}
				else {
					me._tt_ht_3d.style.visibility="hidden";
					me._tt_ht_3d.ggVisible=false;
				}
			}
		}
		me._tt_ht_3d.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((142-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_node.appendChild(me._tt_ht_3d);
		me.__div = me._ht_node;
	};
	function SkinHotspotClass_ht_info(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_info=document.createElement('div');
		el.ggId="ht_info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 200px;';
		hs+='position : absolute;';
		hs+='top : 200px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._ht_info.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getVariableValue('vis_intr_popup') == true) || 
				(player.getVariableValue('vis_hud_popup') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info.style[domTransition]='';
				if (me._ht_info.ggCurrentLogicStateVisible == 0) {
					me._ht_info.style.visibility="hidden";
					me._ht_info.ggVisible=false;
				}
				else {
					me._ht_info.style.visibility=(Number(me._ht_info.style.opacity)>0||!me._ht_info.style.opacity)?'inherit':'hidden';
					me._ht_info.ggVisible=true;
				}
			}
		}
		me._ht_info.onclick=function (e) {
			skin._info_title.ggText=me.hotspot.title;
			skin._info_title.ggTextDiv.innerHTML=skin._info_title.ggText;
			if (skin._info_title.ggUpdateText) {
				skin._info_title.ggUpdateText=function() {
					var hs=me.hotspot.title;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_title.ggUpdatePosition) {
				skin._info_title.ggUpdatePosition();
			}
			skin._info_title.ggTextDiv.scrollTop = 0;
			skin._info_text_body.ggText=me.hotspot.description;
			skin._info_text_body.ggTextDiv.innerHTML=skin._info_text_body.ggText;
			if (skin._info_text_body.ggUpdateText) {
				skin._info_text_body.ggUpdateText=function() {
					var hs=me.hotspot.description;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_text_body.ggUpdatePosition) {
				skin._info_text_body.ggUpdatePosition();
			}
			skin._info_text_body.ggTextDiv.scrollTop = 0;
			player.setVariableValue('vis_info_popup', true);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_info']=true;
			me._tt_information.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_info']=false;
			me._tt_information.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info.ontouchend=function (e) {
			me.elementMouseOver['ht_info']=false;
			me._tt_information.logicBlock_visible();
		}
		me._ht_info.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_image=document.createElement('div');
		els=me._ht_info_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xIEJhc2ljLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLWJhc2ljLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIgoJCQl4PSIwcHgiIH'+
			'k9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSI+CgkJPGc+DQoJCQk8cGF0aCBkPSJNMy41LDE2QzMuNSw5LjA5Niw5LjA5NiwzLjUsMTYsMy41bDAsMGM2LjkwMywwLDEyLjQ5OSw1LjU5NiwxMi41LDEyLjVsMCwwDQoJCQkJYy0wLjAwMSw2LjkwMy01LjU5NywxMi40OTktMTIuNSwxMi41bDAsMEM5LjA5NiwyOC40OTksMy41LDIyLjkwMywzLjUsMTZMMy41LDE2eiBNOC44NTQsOC44NTMNCgkJCQlDNy4wMjIsMTAu'+
			'Njg2LDUuODk0LDEzLjIwNSw1Ljg5MywxNmwwLDBjMC4wMDEsMi43OTUsMS4xMjksNS4zMTQsMi45NjEsNy4xNDZsMCwwYzEuODMyLDEuODMxLDQuMzUyLDIuOTYsNy4xNDYsMi45NmwwLDANCgkJCQljMi43OTUsMCw1LjMxNC0xLjEyOSw3LjE0Ny0yLjk2bDAsMGMxLjgzMS0xLjgzMiwyLjk1OS00LjM1MiwyLjk2LTcuMTQ2bDAsMGMtMC4wMDEtMi43OTUtMS4xMjktNS4zMTQtMi45Ni03LjE0N2wwLDANCgkJCQlDMjEuMzEzLDcuMDIyLDE4Ljc5NSw1Ljg5MywxNiw1Ljg5MmwwLDBDMTMuMjA1LDUuODkzLDEwLjY4Niw3LjAyMiw4Ljg1NCw4Ljg1M0w4Ljg1NCw4Ljg1M3oiLz4NCgkJPC9nPg0KCQ'+
			'k8Zz4NCgkJCTxwYXRoIGQ9Ik0xNC45NjMsMTAuMDVWOS41MjFjMC0wLjY2MSwwLjUzNi0xLjE5NiwxLjE5Ny0xLjE5NmwwLDBjMC42NiwwLDEuMTk2LDAuNTM2LDEuMTk2LDEuMTk2bDAsMHYwLjUyOQ0KCQkJCWMwLDAuNjYxLTAuNTM2LDEuMTk2LTEuMTk2LDEuMTk2bDAsMEMxNS41LDExLjI0NywxNC45NjMsMTAuNzExLDE0Ljk2MywxMC4wNUwxNC45NjMsMTAuMDV6Ii8+DQoJCQk8Zz4NCgkJCQk8cGF0aCBkPSJNMTguNTMyLDIwLjM5MWgtMS4xNzZ2LTYuNDczYzAtMC4wMjEtMC4wMDUtMC4wNDItMC4wMDYtMC4wNjNjMC0wLjAxNCwwLjAwNC0wLjAyNiwwLjAwNC0wLjA0DQoJCQkJCWMwLTAu'+
			'NjYxLTAuNTM2LTEuMTk2LTEuMTk2LTEuMTk2aC0yLjIyNmMtMC42NjEsMC0xLjE5NywwLjUzNi0xLjE5NywxLjE5NmMwLDAuNjYsMC41MzYsMS4xOTYsMS4xOTcsMS4xOTZoMS4wMzF2NS4zNzloLTEuMjA3DQoJCQkJCWMtMC42NjEsMC0xLjE5NywwLjUzNS0xLjE5NywxLjE5NmMwLDAuNjYsMC41MzYsMS4xOTYsMS4xOTcsMS4xOTZoNC43NzVjMC42NiwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2DQoJCQkJCUMxOS43MjksMjAuOTI2LDE5LjE5MiwyMC4zOTEsMTguNTMyLDIwLjM5MXoiLz4NCgkJCTwvZz4NCgkJPC9nPg0KCTwvZz4KCTxnIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzAwMDAwMC'+
			'Igc3Ryb2tlLXdpZHRoPSIwLjIiPgoJCTxnPg0KCQkJPHBhdGggZD0iTTMuNSwxNkMzLjUsOS4wOTYsOS4wOTYsMy41LDE2LDMuNWwwLDBjNi45MDMsMCwxMi40OTksNS41OTYsMTIuNSwxMi41bDAsMA0KCQkJCWMtMC4wMDEsNi45MDMtNS41OTcsMTIuNDk5LTEyLjUsMTIuNWwwLDBDOS4wOTYsMjguNDk5LDMuNSwyMi45MDMsMy41LDE2TDMuNSwxNnogTTguODU0LDguODUzDQoJCQkJQzcuMDIyLDEwLjY4Niw1Ljg5NCwxMy4yMDUsNS44OTMsMTZsMCwwYzAuMDAxLDIuNzk1LDEuMTI5LDUuMzE0LDIuOTYxLDcuMTQ2bDAsMGMxLjgzMiwxLjgzMSw0LjM1MiwyLjk2LDcuMTQ2LDIuOTZsMCwwDQoJ'+
			'CQkJYzIuNzk1LDAsNS4zMTQtMS4xMjksNy4xNDctMi45NmwwLDBjMS44MzEtMS44MzIsMi45NTktNC4zNTIsMi45Ni03LjE0NmwwLDBjLTAuMDAxLTIuNzk1LTEuMTI5LTUuMzE0LTIuOTYtNy4xNDdsMCwwDQoJCQkJQzIxLjMxMyw3LjAyMiwxOC43OTUsNS44OTMsMTYsNS44OTJsMCwwQzEzLjIwNSw1Ljg5MywxMC42ODYsNy4wMjIsOC44NTQsOC44NTNMOC44NTQsOC44NTN6Ii8+DQoJCTwvZz4NCgkJPGc+DQoJCQk8cGF0aCBkPSJNMTQuOTYzLDEwLjA1VjkuNTIxYzAtMC42NjEsMC41MzYtMS4xOTYsMS4xOTctMS4xOTZsMCwwYzAuNjYsMCwxLjE5NiwwLjUzNiwxLjE5NiwxLjE5NmwwLDB2MC'+
			'41MjkNCgkJCQljMCwwLjY2MS0wLjUzNiwxLjE5Ni0xLjE5NiwxLjE5NmwwLDBDMTUuNSwxMS4yNDcsMTQuOTYzLDEwLjcxMSwxNC45NjMsMTAuMDVMMTQuOTYzLDEwLjA1eiIvPg0KCQkJPGc+DQoJCQkJPHBhdGggZD0iTTE4LjUzMiwyMC4zOTFoLTEuMTc2di02LjQ3M2MwLTAuMDIxLTAuMDA1LTAuMDQyLTAuMDA2LTAuMDYzYzAtMC4wMTQsMC4wMDQtMC4wMjYsMC4wMDQtMC4wNA0KCQkJCQljMC0wLjY2MS0wLjUzNi0xLjE5Ni0xLjE5Ni0xLjE5NmgtMi4yMjZjLTAuNjYxLDAtMS4xOTcsMC41MzYtMS4xOTcsMS4xOTZjMCwwLjY2LDAuNTM2LDEuMTk2LDEuMTk3LDEuMTk2aDEuMDMxdjUuMzc5'+
			'aC0xLjIwNw0KCQkJCQljLTAuNjYxLDAtMS4xOTcsMC41MzUtMS4xOTcsMS4xOTZjMCwwLjY2LDAuNTM2LDEuMTk2LDEuMTk3LDEuMTk2aDQuNzc1YzAuNjYsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5Ng0KCQkJCQlDMTkuNzI5LDIwLjkyNiwxOS4xOTIsMjAuMzkxLDE4LjUzMiwyMC4zOTF6Ii8+DQoJCQk8L2c+DQoJCTwvZz4NCgk8L2c+Cjwvc3ZnPg==';
		me._ht_info_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;ht_info_image;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xIEJhc2ljLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLWJhc2ljLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIgoJCQl4PSIwcHgiIH'+
			'k9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KCQk8Zz4NCgkJCTxwYXRoIGQ9Ik0zLjUsMTZDMy41LDkuMDk2LDkuMDk2LDMuNSwxNiwzLjVsMCwwYzYuOTAzLDAsMTIuNDk5LDUuNTk2LDEyLjUsMTIuNWwwLDANCgkJCQljLTAuMDAxLDYuOTAzLTUuNTk3LDEyLjQ5OS0xMi41LDEyLjVsMCwwQzkuMDk2LDI4'+
			'LjQ5OSwzLjUsMjIuOTAzLDMuNSwxNkwzLjUsMTZ6IE04Ljg1NCw4Ljg1Mw0KCQkJCUM3LjAyMiwxMC42ODYsNS44OTQsMTMuMjA1LDUuODkzLDE2bDAsMGMwLjAwMSwyLjc5NSwxLjEyOSw1LjMxNCwyLjk2MSw3LjE0NmwwLDBjMS44MzIsMS44MzEsNC4zNTIsMi45Niw3LjE0NiwyLjk2bDAsMA0KCQkJCWMyLjc5NSwwLDUuMzE0LTEuMTI5LDcuMTQ3LTIuOTZsMCwwYzEuODMxLTEuODMyLDIuOTU5LTQuMzUyLDIuOTYtNy4xNDZsMCwwYy0wLjAwMS0yLjc5NS0xLjEyOS01LjMxNC0yLjk2LTcuMTQ3bDAsMA0KCQkJCUMyMS4zMTMsNy4wMjIsMTguNzk1LDUuODkzLDE2LDUuODkybDAsMEMxMy4yMD'+
			'UsNS44OTMsMTAuNjg2LDcuMDIyLDguODU0LDguODUzTDguODU0LDguODUzeiIvPg0KCQk8L2c+DQoJCTxnPg0KCQkJPHBhdGggZD0iTTE0Ljk2MywxMC4wNVY5LjUyMWMwLTAuNjYxLDAuNTM2LTEuMTk2LDEuMTk3LTEuMTk2bDAsMGMwLjY2LDAsMS4xOTYsMC41MzYsMS4xOTYsMS4xOTZsMCwwdjAuNTI5DQoJCQkJYzAsMC42NjEtMC41MzYsMS4xOTYtMS4xOTYsMS4xOTZsMCwwQzE1LjUsMTEuMjQ3LDE0Ljk2MywxMC43MTEsMTQuOTYzLDEwLjA1TDE0Ljk2MywxMC4wNXoiLz4NCgkJCTxnPg0KCQkJCTxwYXRoIGQ9Ik0xOC41MzIsMjAuMzkxaC0xLjE3NnYtNi40NzNjMC0wLjAyMS0wLjAwNS0w'+
			'LjA0Mi0wLjAwNi0wLjA2M2MwLTAuMDE0LDAuMDA0LTAuMDI2LDAuMDA0LTAuMDQNCgkJCQkJYzAtMC42NjEtMC41MzYtMS4xOTYtMS4xOTYtMS4xOTZoLTIuMjI2Yy0wLjY2MSwwLTEuMTk3LDAuNTM2LTEuMTk3LDEuMTk2YzAsMC42NiwwLjUzNiwxLjE5NiwxLjE5NywxLjE5NmgxLjAzMXY1LjM3OWgtMS4yMDcNCgkJCQkJYy0wLjY2MSwwLTEuMTk3LDAuNTM1LTEuMTk3LDEuMTk2YzAsMC42NiwwLjUzNiwxLjE5NiwxLjE5NywxLjE5Nmg0Ljc3NWMwLjY2LDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTYNCgkJCQkJQzE5LjcyOSwyMC45MjYsMTkuMTkyLDIwLjM5MSwxOC41MzIsMjAuMzkxeiIvPg'+
			'0KCQkJPC9nPg0KCQk8L2c+DQoJPC9nPgoJPGcgZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KCQk8Zz4NCgkJCTxwYXRoIGQ9Ik0zLjUsMTZDMy41LDkuMDk2LDkuMDk2LDMuNSwxNiwzLjVsMCwwYzYuOTAzLDAsMTIuNDk5LDUuNTk2LDEyLjUsMTIuNWwwLDANCgkJCQljLTAuMDAxLDYuOTAzLTUuNTk3LDEyLjQ5OS0xMi41LDEyLjVsMCwwQzkuMDk2LDI4LjQ5OSwzLjUsMjIuOTAzLDMuNSwxNkwzLjUsMTZ6IE04Ljg1NCw4Ljg1Mw0KCQkJCUM3'+
			'LjAyMiwxMC42ODYsNS44OTQsMTMuMjA1LDUuODkzLDE2bDAsMGMwLjAwMSwyLjc5NSwxLjEyOSw1LjMxNCwyLjk2MSw3LjE0NmwwLDBjMS44MzIsMS44MzEsNC4zNTIsMi45Niw3LjE0NiwyLjk2bDAsMA0KCQkJCWMyLjc5NSwwLDUuMzE0LTEuMTI5LDcuMTQ3LTIuOTZsMCwwYzEuODMxLTEuODMyLDIuOTU5LTQuMzUyLDIuOTYtNy4xNDZsMCwwYy0wLjAwMS0yLjc5NS0xLjEyOS01LjMxNC0yLjk2LTcuMTQ3bDAsMA0KCQkJCUMyMS4zMTMsNy4wMjIsMTguNzk1LDUuODkzLDE2LDUuODkybDAsMEMxMy4yMDUsNS44OTMsMTAuNjg2LDcuMDIyLDguODU0LDguODUzTDguODU0LDguODUzeiIvPg0KCQ'+
			'k8L2c+DQoJCTxnPg0KCQkJPHBhdGggZD0iTTE0Ljk2MywxMC4wNVY5LjUyMWMwLTAuNjYxLDAuNTM2LTEuMTk2LDEuMTk3LTEuMTk2bDAsMGMwLjY2LDAsMS4xOTYsMC41MzYsMS4xOTYsMS4xOTZsMCwwdjAuNTI5DQoJCQkJYzAsMC42NjEtMC41MzYsMS4xOTYtMS4xOTYsMS4xOTZsMCwwQzE1LjUsMTEuMjQ3LDE0Ljk2MywxMC43MTEsMTQuOTYzLDEwLjA1TDE0Ljk2MywxMC4wNXoiLz4NCgkJCTxnPg0KCQkJCTxwYXRoIGQ9Ik0xOC41MzIsMjAuMzkxaC0xLjE3NnYtNi40NzNjMC0wLjAyMS0wLjAwNS0wLjA0Mi0wLjAwNi0wLjA2M2MwLTAuMDE0LDAuMDA0LTAuMDI2LDAuMDA0LTAuMDQNCgkJ'+
			'CQkJYzAtMC42NjEtMC41MzYtMS4xOTYtMS4xOTYtMS4xOTZoLTIuMjI2Yy0wLjY2MSwwLTEuMTk3LDAuNTM2LTEuMTk3LDEuMTk2YzAsMC42NiwwLjUzNiwxLjE5NiwxLjE5NywxLjE5NmgxLjAzMXY1LjM3OWgtMS4yMDcNCgkJCQkJYy0wLjY2MSwwLTEuMTk3LDAuNTM1LTEuMTk3LDEuMTk2YzAsMC42NiwwLjUzNiwxLjE5NiwxLjE5NywxLjE5Nmg0Ljc3NWMwLjY2LDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTYNCgkJCQkJQzE5LjcyOSwyMC45MjYsMTkuMTkyLDIwLjM5MSwxOC41MzIsMjAuMzkxeiIvPg0KCQkJPC9nPg0KCQk8L2c+DQoJPC9nPgo8L3N2Zz4=';
		me._ht_info_image__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;ht_info_image;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_info_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -15px;';
		hs+='position : absolute;';
		hs+='top : -15px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getVariableValue('vis_info_popup') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info_image.style[domTransition]='';
				if (me._ht_info_image.ggCurrentLogicStateVisible == 0) {
					me._ht_info_image.style.visibility="hidden";
					me._ht_info_image.ggVisible=false;
				}
				else {
					me._ht_info_image.style.visibility=(Number(me._ht_info_image.style.opacity)>0||!me._ht_info_image.style.opacity)?'inherit':'hidden';
					me._ht_info_image.ggVisible=true;
				}
			}
		}
		me._ht_info_image.onmouseover=function (e) {
			me._ht_info_image__img.style.visibility='hidden';
			me._ht_info_image__imgo.style.visibility='inherit';
		}
		me._ht_info_image.onmouseout=function (e) {
			me._ht_info_image__img.style.visibility='inherit';
			me._ht_info_image__imgo.style.visibility='hidden';
		}
		me._ht_info_image.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info.appendChild(me._ht_info_image);
		el=me._tt_information=document.createElement('div');
		els=me._tt_information__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_information";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -50px;';
		hs+='position : absolute;';
		hs+='top : 21px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_information.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_information.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_information.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_information.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_information.style[domTransition]='left 0s, top 0s';
				if (me._tt_information.ggCurrentLogicStatePosition == 0) {
					me._tt_information.style.left='-50px';
					me._tt_information.style.top='-47px';
				}
				else {
					me._tt_information.style.left='-50px';
					me._tt_information.style.top='21px';
				}
			}
		}
		me._tt_information.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['ht_info'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_information.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_information.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_information.style[domTransition]='left 0s, top 0s';
				if (me._tt_information.ggCurrentLogicStateVisible == 0) {
					me._tt_information.style.visibility=(Number(me._tt_information.style.opacity)>0||!me._tt_information.style.opacity)?'inherit':'hidden';
					me._tt_information.ggVisible=true;
				}
				else {
					me._tt_information.style.visibility="hidden";
					me._tt_information.ggVisible=false;
				}
			}
		}
		me._tt_information.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_info.appendChild(me._tt_information);
		me.__div = me._ht_info;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		if (hotspot.skinid=='ht_node') {
			hotspot.skinid = 'ht_node';
			hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_node_sizechanged();;
			me.callChildLogicBlocksHotspot_ht_node_changenode();;
			me.callChildLogicBlocksHotspot_ht_node_configloaded();;
			me.callChildLogicBlocksHotspot_ht_node_mouseover();;
			me.callChildLogicBlocksHotspot_ht_node_active();;
			me.callChildLogicBlocksHotspot_ht_node_changevisitednodes();;
			me.callChildLogicBlocksHotspot_ht_node_varchanged_opt_3d_preview();;
		} else
		{
			hotspot.skinid = 'ht_info';
			hsinst = new SkinHotspotClass_ht_info(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_info_changenode();;
			me.callChildLogicBlocksHotspot_ht_info_configloaded();;
			me.callChildLogicBlocksHotspot_ht_info_mouseover();;
			me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_intr_popup();;
			me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_hud_popup();;
			me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_info_popup();;
		}
		if (hotspot.customimage) {
			var img = document.createElement('img');
			img['ondragstart'] = function() { return false; };
			img.setAttribute('src', hotspot.customimage);
			img.setAttribute('style', 'position: absolute;width: ' + hotspot.customimagewidth + 'px; height: ' + hotspot.customimageheight + 'px;top: -' + (hotspot.customimageheight/2) + 'px;left: -' + (hotspot.customimagewidth/2) + 'px;');
			hsinst.__div.insertBefore(img,hsinst.__div.firstChild);
			hsinst.ggUse3d = hotspot.use3D;
			hsinst.gg3dDistance = hotspot.distance3D;
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				hotspotTemplates['ht_node'][i] = null;
			}
		}
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				hotspotTemplates['ht_info'][i] = null;
			}
		}
		hotspotTemplates = [];
	}
	function SkinCloner_thumbnail_cloner_Class(nodeId, parentScope,ggParent,parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.__div=document.createElement('div');
		me.__div.setAttribute('style','position: absolute;width: 96px; height: 62px; visibility: inherit; overflow: visible;');
		me.__div.style.left=parameter.left;
		me.__div.style.top=parameter.top;
		me.__div.ggIsActive = function() {
			return player.getCurrentNode()==me.ggNodeId;
		}
		me.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._thumbnail_nodeimage=document.createElement('div');
		els=me._thumbnail_nodeimage__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/hs_preview_image_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;thumbnail_nodeimage;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_nodeImage";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.62,sy:0.58 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 90px;';
		hs+='left : -24px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._thumbnail_nodeimage.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_nodeimage.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._thumbnail_nodeimage);
		el=me._checkmark_tick=document.createElement('div');
		els=me._checkmark_tick__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCIgWw0KCTwhRU5USVRZIG5zX2Zsb3dzICJodHRwOi8vbnMuYWRvYmUuY29tL0Zsb3dzLzEuMC8iPg0KCTwhRU5USVRZIG5zX2V4dGVuZCAiaHR0cDovL25zLmFkb2JlLmNvbS9FeHRlbn'+
			'NpYmlsaXR5LzEuMC8iPg0KCTwhRU5USVRZIG5zX2FpICJodHRwOi8vbnMuYWRvYmUuY29tL0Fkb2JlSWxsdXN0cmF0b3IvMTAuMC8iPg0KCTwhRU5USVRZIG5zX2dyYXBocyAiaHR0cDovL25zLmFkb2JlLmNvbS9HcmFwaHMvMS4wLyI+DQpdPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zOng9IiZuc19leHRlbmQ7IiB4bWxuczppPSImbnNfYWk7IiB4bWxuczpncmFwaD0iJm5zX2dyYXBoczsiDQoJIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOmE9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRv'+
			'YmVTVkdWaWV3ZXJFeHRlbnNpb25zLzMuMC8iDQoJIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSItMzcyMiAtMjYwNiAzMiAzMiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAtMzcyMiAtMjYwNiAzMiAzMiINCgkgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8ZyBpZD0iTGF5ZXJfMSI+DQo8L2c+DQo8ZyBpZD0iRWJlbmVfMSI+DQo8L2c+DQo8ZyBpZD0iTGF5ZXJfMiI+DQoJPGc+DQoJCTxnPg0KCQkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0zNjk1LjQ3My0yNTk4LjE0NmMtMC41MTktMC41MTktMS4zNjEtMC41MTktMS44NzksMGwtOC43ODcsOC'+
			'43ODdsLTIuMjkxLTIuMjQzDQoJCQkJYy0wLjUyNS0wLjUxMy0xLjM2Ni0wLjUwNC0xLjg4LDAuMDJjLTAuNTEzLDAuNTI1LTAuNTA0LDEuMzY3LDAuMDIxLDEuODhsMy4yMywzLjE2M2MwLjI1OSwwLjI1MywwLjU5NCwwLjM3OSwwLjkzLDAuMzc5DQoJCQkJYzAuMzQsMCwwLjY4LTAuMTMsMC45NC0wLjM5bDkuNzE3LTkuNzE3Qy0zNjk0Ljk1NC0yNTk2Ljc4NS0zNjk0Ljk1NC0yNTk3LjYyNi0zNjk1LjQ3My0yNTk4LjE0NnoiLz4NCgkJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMzY5OS45Ni0yNTgzLjgzN2gtMTIuMzI1di0xMi4zMjZoMTEuODIxbDIuMjUyLTIuMjUyYy0wLjE2Ni0wLjA4'+
			'Ni0wLjM1Mi0wLjE0MS0wLjU1Mi0wLjE0MWgtMTQuNzE4DQoJCQkJYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2djE0LjcxOWMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMTQuNzE4YzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZ2LTEwLjQwMw0KCQkJCWwtMi4zOTMsMi4zOTNWLTI1ODMuODM3eiIvPg0KCQk8L2c+DQoJCTxnIG9wYWNpdHk9IjAuNCIgIGE6YWRvYmUtYmxlbmRpbmctbW9kZT0ibXVsdGlwbHkiPg0KCQkJDQoJCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMUExNzFCIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW'+
			'5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiAgYTphZG9iZS1ibGVuZGluZy1tb2RlPSJub3JtYWwiIGQ9Ig0KCQkJCU0tMzY5NS40NzMtMjU5OC4xNDZjLTAuNTE5LTAuNTE5LTEuMzYxLTAuNTE5LTEuODc5LDBsLTguNzg3LDguNzg3bC0yLjI5MS0yLjI0M2MtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAyDQoJCQkJYy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OWMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxNw0KCQkJCUMtMzY5NC45NTQtMjU5Ni43ODUtMzY5'+
			'NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6Ii8+DQoJCQkNCgkJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMxQTE3MUIiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiICBhOmFkb2JlLWJsZW5kaW5nLW1vZGU9Im5vcm1hbCIgZD0iDQoJCQkJTS0zNjk5Ljk2LTI1ODMuODM3aC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAuMzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MTgNCgkJCQljLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5YzAsMC'+
			'42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgxNC43MThjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtMTAuNDAzDQoJCQkJbC0yLjM5MywyLjM5M1YtMjU4My44Mzd6Ii8+DQoJCTwvZz4NCgkJPGc+DQoJCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTM2OTUuNDczLTI1OTguMTQ2Yy0wLjUxOS0wLjUxOS0xLjM2MS0wLjUxOS0xLjg3OSwwbC04Ljc4Nyw4Ljc4N2wtMi4yOTEtMi4yNDMNCgkJCQljLTAuNTI1LTAuNTEzLTEuMzY2LTAuNTA0LTEuODgsMC4wMmMtMC41MTMsMC41MjUtMC41MDQsMS4zNjcsMC4wMjEsMS44OGwzLjIzLDMuMTYzYzAuMjU5LDAuMjUzLDAuNTk0LDAu'+
			'Mzc5LDAuOTMsMC4zNzkNCgkJCQljMC4zNCwwLDAuNjgtMC4xMywwLjk0LTAuMzlsOS43MTctOS43MTdDLTM2OTQuOTU0LTI1OTYuNzg1LTM2OTQuOTU0LTI1OTcuNjI2LTM2OTUuNDczLTI1OTguMTQ2eiIvPg0KCQkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0zNjk5Ljk2LTI1ODMuODM3aC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAuMzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MTgNCgkJCQljLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgxNC43MThjMC42NjEsMC'+
			'wxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtMTAuNDAzDQoJCQkJbC0yLjM5MywyLjM5M1YtMjU4My44Mzd6Ii8+DQoJCTwvZz4NCgkJPGc+DQoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMxQTE3MUIiIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0tMzY5NS40NzMtMjU5OC4xNDYNCgkJCQljLTAuNTE5LTAuNTE5LTEuMzYxLTAuNTE5LTEuODc5LDBsLTguNzg3LDguNzg3bC0yLjI5MS0yLjI0M2MtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAyDQoJCQkJYy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2'+
			'NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OWMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxNw0KCQkJCUMtMzY5NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6Ii8+DQoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMxQTE3MUIiIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0tMzY5OS45Ni0yNTgzLjgzNw0KCQkJCWgtMTIuMzI1di0xMi4zMjZoMTEuODIxbDIuMjUyLTIuMjUyYy0wLjE2Ni'+
			'0wLjA4Ni0wLjM1Mi0wLjE0MS0wLjU1Mi0wLjE0MWgtMTQuNzE4Yy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2djE0LjcxOQ0KCQkJCWMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMTQuNzE4YzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZ2LTEwLjQwM2wtMi4zOTMsMi4zOTNWLTI1ODMuODM3eiIvPg0KCQk8L2c+DQoJPC9nPg0KPC9nPg0KPC9zdmc+DQo=';
		me._checkmark_tick__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;checkmark_tick;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="checkmark_tick";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 24px;';
		hs+='position : absolute;';
		hs+='right : 7px;';
		hs+='top : 3px;';
		hs+='visibility : hidden;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._checkmark_tick.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._checkmark_tick.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.nodeVisited(me._checkmark_tick.ggElementNodeId()) == true) || 
				(me._checkmark_tick.ggIsActive() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._checkmark_tick.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._checkmark_tick.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._checkmark_tick.style[domTransition]='';
				if (me._checkmark_tick.ggCurrentLogicStateVisible == 0) {
					me._checkmark_tick.style.visibility=(Number(me._checkmark_tick.style.opacity)>0||!me._checkmark_tick.style.opacity)?'inherit':'hidden';
					me._checkmark_tick.ggVisible=true;
				}
				else {
					me._checkmark_tick.style.visibility="hidden";
					me._checkmark_tick.ggVisible=false;
				}
			}
		}
		me._checkmark_tick.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._checkmark_tick);
		el=me._thumbnail_active=document.createElement('div');
		el.ggId="thumbnail_active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #d1d1d1;';
		hs+='cursor : pointer;';
		hs+='height : 51px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_active.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				(me._thumbnail_active.ggIsActive() == true)
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				(me.elementMouseOver['thumbnail_active'] == true)
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._thumbnail_active.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._thumbnail_active.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._thumbnail_active.style[domTransition]='border-color 0s';
				if (me._thumbnail_active.ggCurrentLogicStateBorderColor == 0) {
					me._thumbnail_active.style.borderColor="rgba(255,255,255,1)";
				}
				else if (me._thumbnail_active.ggCurrentLogicStateBorderColor == 1) {
					me._thumbnail_active.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me._thumbnail_active.style.borderColor="rgba(209,209,209,1)";
				}
			}
		}
		me._thumbnail_active.onclick=function (e) {
			if (
				(
					(me._thumbnail_active.ggIsActive() == false)
				)
			) {
				player.openNext("{"+me.ggNodeId+"}","");
			}
		}
		me._thumbnail_active.onmouseover=function (e) {
			me.elementMouseOver['thumbnail_active']=true;
			me._thumbnail_title.logicBlock_alpha();
			me._thumbnail_active.logicBlock_bordercolor();
		}
		me._thumbnail_active.onmouseout=function (e) {
			me.elementMouseOver['thumbnail_active']=false;
			me._thumbnail_title.logicBlock_alpha();
			me._thumbnail_active.logicBlock_bordercolor();
		}
		me._thumbnail_active.ontouchend=function (e) {
			me.elementMouseOver['thumbnail_active']=false;
			me._thumbnail_title.logicBlock_alpha();
			me._thumbnail_active.logicBlock_bordercolor();
		}
		me._thumbnail_active.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnail_title=document.createElement('div');
		els=me._thumbnail_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumbnail_title";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 51px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 2px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 85px;';
		hs+='height: 51px;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.392157);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.ggUserdata.title;
		el.appendChild(els);
		me._thumbnail_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_title.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.elementMouseOver['thumbnail_active'] == true) && 
				(me.ggUserdata.title != "") && 
				(player.getVariableValue('opt_thumbnail_menu_tooltip') == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_title.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_title.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_title.style[domTransition]='opacity 500ms ease 0ms';
				if (me._thumbnail_title.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_title.style.visibility=me._thumbnail_title.ggVisible?'inherit':'hidden';
					me._thumbnail_title.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._thumbnail_title.style.opacity == 0.0) { me._thumbnail_title.style.visibility="hidden"; } }, 505);
					me._thumbnail_title.style.opacity=0;
				}
			}
		}
		me._thumbnail_title.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._thumbnail_active.appendChild(me._thumbnail_title);
		me.__div.appendChild(me._thumbnail_active);
	};
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px;}'));
	document.head.appendChild(style);
	me._vehiclehudinfo.logicBlock_scaling();
	me._vehicleintinfo.logicBlock_scaling();
	me._button_image_normalscreen.logicBlock_visible();
	me._button_image_fullscreen.logicBlock_visible();
	me._tt_fullscreen.logicBlock_text();
	me._screentint_info.logicBlock_visible();
	me._tt_togglemap.logicBlock_text();
	me._button_close_map.logicBlock_visible();
	me._information.logicBlock_alpha();
	me._vehiclehudinfo.logicBlock_alpha();
	me._hood_popup.logicBlock_text();
	me._vehicleintinfo.logicBlock_alpha();
	me._interior_popup.logicBlock_text();
	me._hoodtt.logicBlock_visible();
	me._hoodtt.logicBlock_text();
	me._interiortt.logicBlock_visible();
	me._contact_info.logicBlock_visible();
	me._tt_thumbnail_open.logicBlock_text();
	me._thumbnail_menu.logicBlock_alpha();
	me._tt_togglemap.logicBlock_position();
	me._tt_fullscreen.logicBlock_position();
	me._tt_twittre.logicBlock_position();
	me._tt_facebook.logicBlock_position();
	me._tt_google.logicBlock_position();
	me._tt_thumbnail_open.logicBlock_position();
	me._thumbnail_menu.logicBlock_position();
	player.addListener('sizechanged', function(args) { me._vehiclehudinfo.logicBlock_scaling();me._vehicleintinfo.logicBlock_scaling(); });
	player.addListener('fullscreenenter', function(args) { me._button_image_normalscreen.logicBlock_visible();me._button_image_fullscreen.logicBlock_visible();me._tt_fullscreen.logicBlock_text(); });
	player.addListener('fullscreenexit', function(args) { me._button_image_normalscreen.logicBlock_visible();me._button_image_fullscreen.logicBlock_visible();me._tt_fullscreen.logicBlock_text(); });
	player.addListener('changenode', function(args) { me._screentint_info.logicBlock_visible();me._tt_togglemap.logicBlock_text();me._button_close_map.logicBlock_visible();me._information.logicBlock_alpha();me._vehiclehudinfo.logicBlock_alpha();me._hood_popup.logicBlock_text();me._vehicleintinfo.logicBlock_alpha();me._interior_popup.logicBlock_text();me._hoodtt.logicBlock_visible();me._hoodtt.logicBlock_text();me._interiortt.logicBlock_visible();me._contact_info.logicBlock_visible();me._tt_thumbnail_open.logicBlock_text();me._thumbnail_menu.logicBlock_alpha(); });
	player.addListener('configloaded', function(args) { me._tt_togglemap.logicBlock_position();me._tt_fullscreen.logicBlock_position();me._tt_twittre.logicBlock_position();me._tt_facebook.logicBlock_position();me._tt_google.logicBlock_position();me._vehiclehudinfo.logicBlock_scaling();me._vehicleintinfo.logicBlock_scaling();me._contact_info.logicBlock_visible();me._tt_thumbnail_open.logicBlock_position();me._thumbnail_menu.logicBlock_position(); });
	player.addListener('varchanged_vis_intr_popup', function(args) { me._screentint_info.logicBlock_visible();me._vehicleintinfo.logicBlock_alpha();me._interior_popup.logicBlock_text();me._hoodtt.logicBlock_visible();me._interiortt.logicBlock_visible();me._contact_info.logicBlock_visible(); });
	player.addListener('varchanged_vis_hud_popup', function(args) { me._screentint_info.logicBlock_visible();me._vehiclehudinfo.logicBlock_alpha();me._hood_popup.logicBlock_text();me._hoodtt.logicBlock_visible();me._interiortt.logicBlock_visible();me._contact_info.logicBlock_visible(); });
	player.addListener('varchanged_vis_info_popup', function(args) { me._information.logicBlock_alpha(); });
	player.addListener('varchanged_vis_TT_hood', function(args) { me._hoodtt.logicBlock_text(); });
	player.addListener('varchanged_vis_thumbnail_menu', function(args) { me._tt_thumbnail_open.logicBlock_text();me._thumbnail_menu.logicBlock_alpha(); });
	player.addListener('varchanged_vis_map', function(args) { me._tt_togglemap.logicBlock_text();me._button_close_map.logicBlock_visible(); });
	player.addListener('changenode', function(args) { me._thumbnail_cloner.callChildLogicBlocks_changenode(); });
	player.addListener('mouseover', function(args) { me._thumbnail_cloner.callChildLogicBlocks_mouseover(); });
	player.addListener('mouseover', function(args) { me._thumbnail_cloner.callChildLogicBlocks_mouseover(); });
	player.addListener('changenode', function(args) { me._thumbnail_cloner.callChildLogicBlocks_active(); });
	player.addListener('changevisitednodes', function(args) { me._thumbnail_cloner.callChildLogicBlocks_changevisitednodes(); });
	player.addListener('varchanged_opt_thumbnail_menu_tooltip', function(args) { me._thumbnail_cloner.callChildLogicBlocks_varchanged_opt_thumbnail_menu_tooltip(); });
	player.addListener('sizechanged', function(args) { me.callChildLogicBlocksHotspot_ht_node_sizechanged(); });
	player.addListener('changenode', function(args) { me.callChildLogicBlocksHotspot_ht_node_changenode();me.callChildLogicBlocksHotspot_ht_info_changenode(); });
	player.addListener('configloaded', function(args) { me.callChildLogicBlocksHotspot_ht_node_configloaded();me.callChildLogicBlocksHotspot_ht_info_configloaded(); });
	player.addListener('mouseover', function(args) { me.callChildLogicBlocksHotspot_ht_node_mouseover();me.callChildLogicBlocksHotspot_ht_info_mouseover(); });
	player.addListener('changenode', function(args) { me.callChildLogicBlocksHotspot_ht_node_active(); });
	player.addListener('changevisitednodes', function(args) { me.callChildLogicBlocksHotspot_ht_node_changevisitednodes(); });
	player.addListener('varchanged_vis_intr_popup', function(args) { me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_intr_popup(); });
	player.addListener('varchanged_vis_hud_popup', function(args) { me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_hud_popup(); });
	player.addListener('varchanged_vis_info_popup', function(args) { me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_info_popup(); });
	player.addListener('varchanged_opt_3d_preview', function(args) { me.callChildLogicBlocksHotspot_ht_node_varchanged_opt_3d_preview(); });
	player.addListener('hotspotsremoved', function(args) { me.removeSkinHotspots(); });
	me.skinTimerEvent();
};