// JSONよりデータを取得、順に並べる
var page = 1;
var PAGE_CNT = 30;

if (location.hash !== '') {
	page = parseInt(location.hash.replace('#',''));
}


//ギャラリー作品群
function jgWorks(page) {
$.getJSON('json/works.json', null, function(json) {
	if (page < 0 || (page-1)*PAGE_CNT > json.length) {
		$('#works').html('<p class="notfound">Not found</p>');
		return false;
	}
	var ul = $('<ul>');
	
		
	for (var i=(page-1)*PAGE_CNT; i<json.length; i++) {
		/* URLなし */		
		if (json[i].url == null && json[i].artist !== null) {
		ul.append('<li class="pics"><h4><a href="img/kamijake/'+json[i].image+'" rel="lightbox['+json[i].id+']" title="'+json[i].title+' / '+json[i].artist+'<br>'+json[i].product+'</a><br>'+json[i].paper+'"><img src="img/kamijake/'+json[i].image+'" alt="'+json[i].title+' / '+json[i].artist+'" width="150"></a><a href="img/kamijake/'+json[i].image.replace('_f.jpg', '_b.jpg')+'" rel="lightbox['+json[i].id+']" title="'+json[i].title+' / '+json[i].artist+'<br>'+json[i].product+'<br>'+json[i].paper+'"></a></h4><p class="name">'+json[i].title+' / '+json[i].artist+'</p><p class="date">'+json[i].date+'.up.</p></li>');
			if (i >= page * PAGE_CNT - 1) break;	
		}
		/* URLなしかつST */
		else if (json[i].url == null && json[i].artist == null) {
		ul.append('<li class="pics"><h4><a href="img/kamijake/'+json[i].image+'" rel="lightbox['+json[i].id+']" title="'+json[i].title+'<br>'+json[i].product+'</a><br>'+json[i].paper+'"><img src="img/kamijake/'+json[i].image+'" alt="'+json[i].title+'" width="150"></a><a href="img/kamijake/'+json[i].image.replace('_f.jpg', '_b.jpg')+'" rel="lightbox['+json[i].id+']" title="'+json[i].title+' / '+json[i].artist+'<br>'+json[i].product+'<br>'+json[i].paper+'"></a></h4><p class="name">'+json[i].title+'</p><p class="date">'+json[i].date+'.up.</p></li>');
			if (i >= page * PAGE_CNT - 1) break;		
		}
		
		/* 特殊ケースはidを指定しelse if */
		else if (json[i].id == "045") {
		ul.append('<li class="pics"><h4><a href="img/kamijake/'+json[i].image+'" rel="lightbox['+json[i].id+']" title="'+json[i].title+' / '+json[i].artist+'<br>'+json[i].product+'<br>'+json[i].paper+'"><img src="img/kamijake/'+json[i].image+'" alt="'+json[i].title+' / '+json[i].artist+'" width="150"></a><a href="img/kamijake/'+json[i].image.replace('_f.jpg', '_b.jpg')+'" rel="lightbox['+json[i].id+']" title="'+json[i].title+' / '+json[i].artist+'<br>'+json[i].product+'<br>'+json[i].paper+'"></a></h4><p class="name">'+json[i].title+' / '+json[i].artist+' &ensp;<a href="'+json[i].url+'" target="_blank">[HP]</a>&ensp;×&ensp;モケーレムベンベ&ensp;<a href="http://www.mokele-mbembe.info/" target="_blank">[HP]</a></p><p class="date">'+json[i].date+'.up.</p></li>');
			if (i >= page * PAGE_CNT - 1) break;		
		}
		else if (json[i].id == "054")  {
		ul.append('<li class="pics"><h4><a href="img/kamijake/'+json[i].image+'" rel="lightbox['+json[i].id+']" title="'+json[i].title+' / '+json[i].artist+'<br>'+json[i].product+'<br>'+json[i].paper+'"><img src="img/kamijake/'+json[i].image+'" alt="'+json[i].title+' / '+json[i].artist+'" width="150"></a></h4><p class="name">'+json[i].title+' / '+json[i].artist+'&ensp;<a href="'+json[i].url+'" target="_blank">[HP]</a></p><p class="date">'+json[i].date+'.up.</p></li>');
			if (i >= page * PAGE_CNT - 1) break;	
		}
		else if (json[i].id == "066") {
		ul.append('<li class="pics"><h4><a href="img/kamijake/'+json[i].image+'" rel="lightbox['+json[i].id+']" title="'+json[i].title+' <br>'+json[i].product+'<br>'+json[i].paper+'"><img src="img/kamijake/'+json[i].image+'" alt="'+json[i].title+' / '+json[i].artist+'" width="150"></a><a href="img/kamijake/'+json[i].image.replace('_f.jpg', '_b.jpg')+'" rel="lightbox['+json[i].id+']" title="'+json[i].title+'<br>'+json[i].product+'<br>'+json[i].paper+'"></a></h4><p class="name">'+json[i].title+' / '+json[i].artist+'&ensp;<a href="'+json[i].url+'" target="_blank">[HP]</a><br>&ensp;(Artwork: RiVAQ<a href="http://rivaq-msyk.tumblr.com/" target="_blank">[HP]</a>)</p><p class="date">'+json[i].date+'.up.</p></li>');
			if (i >= page * PAGE_CNT - 1) break;	
		}
		
		/* URLあり */
		else if (json[i].url !== null && json[i].artist !== null)  {
		ul.append('<li class="pics"><h4><a href="img/kamijake/'+json[i].image+'" rel="lightbox['+json[i].id+']" title="'+json[i].title+' / '+json[i].artist+'<br>'+json[i].product+'<br>'+json[i].paper+'"><img src="img/kamijake/'+json[i].image+'" alt="'+json[i].title+' / '+json[i].artist+'" width="150"></a><a href="img/kamijake/'+json[i].image.replace('_f.jpg', '_b.jpg')+'" rel="lightbox['+json[i].id+']" title="'+json[i].title+' / '+json[i].artist+'<br>'+json[i].product+'<br>'+json[i].paper+'"></a></h4><p class="name">'+json[i].title+' / '+json[i].artist+'&ensp;<a href="'+json[i].url+'" target="_blank">[HP]</a></p><p class="date">'+json[i].date+'.up.</p></li>');
			if (i >= page * PAGE_CNT - 1) break;	
		}
		/* URLありかつST*/
		else {
		ul.append('<li class="pics"><h4><a href="img/kamijake/'+json[i].image+'" rel="lightbox['+json[i].id+']" title="'+json[i].title+'<br>'+json[i].product+'<br>'+json[i].paper+'"><img src="img/kamijake/'+json[i].image+'" alt="'+json[i].title+'" width="150"></a><a href="img/kamijake/'+json[i].image.replace('_f.jpg', '_b.jpg')+'" rel="lightbox['+json[i].id+']" title="'+json[i].title+'<br>'+json[i].product+'<br>'+json[i].paper+'"></a></h4><p class="name">'+json[i].title+'&ensp;<a href="'+json[i].url+'" target="_blank">[HP]</a></p><p class="date">'+json[i].date+'.up.</p></li>');
			if (i >= page * PAGE_CNT - 1) break;	
		}
	}
	
	$('#works').html(ul);


// ページングの制御
if (page>1) {
	$('#pages li:eq(0)').html('<a href="index.html#'+(page-1)+'">&laquo;&ensp;prev</a>');
} 
else{
	$('#pages li:eq(0)').html('<span>&laquo;&ensp;prev</span>');
}
if (page*PAGE_CNT < json.length){
	$('#pages li:eq(1)').html('<a href="index.html#'+(page+1)+'">next&ensp;&raquo;</a>');
}
else{
	$('#pages li:eq(1)').html('<span>next&ensp;&raquo;</span>');
}
});

}
jgWorks(page);

$(window).bind('hashchange', function() {
	jgWorks(parseInt(location.hash.replace('#','')));
});

// 画像にマウスオーバーで不透明度50%
$(function(){
		$('#works').on({
			'mouseenter': function(){
				$(this).fadeTo('fast',0.5);
		},
			'mouseleave': function(){
				$(this).fadeTo('fast',1);
			}
		}, 'img');
	});