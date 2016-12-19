<!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8" />
		<title>网站首页</title>
		<meta name="description" content="描述" />
		<meta name="keywords" content="关键词英文逗号分隔" />
		<link href="images/favicon.ico" type="image/x-icon" rel="shortcut icon" />
		<link href="css/style.css" rel="stylesheet" />
		<script>
			/*
			 * pc 跳转到 phone
			 */
			try {
				var urlhash = window.location.hash;
				if(!urlhash.match("fromapp")) {
					if((navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i))) {
						window.location.href = "/m";
					}
				}
			} catch(err) {}
		</script>
	</head>

	<body>
		<div class="header_w">
			<div class="header">
				<div class="logo">
					<a href="index.asp"><img src="images/logo_05.jpg" alt="logo" /></a>
				</div>
				<div class="logo-r"><img src="images/logor_05.jpg" alt="" /></div>
				<div class="tel"><img src="images/tel_11.jpg" alt="" /></div>
			</div>
		</div>
<div class="w-100">
		<div class="w-nav">
			<div class="nav" id="nav">
				<ul>
					<li>
						<a href="index.asp" class="this">首页</a>
					</li>
					<li>
						<a href="index.asp">高端定制西装</a>
					</li>
					<li>
						<a href="">衬衣定制</a>
					</li>
					<li>
						<a href="">职业正装</a>
					</li>
					<li>
						<a href="">冲锋衣定制</a>
					</li>
					<li>
						<a href="">工作服定制</a>
					</li>
					<li>
						<a href="">校服定制</a>
					</li>
					<li>
						<a href="">广告衫短袖T恤</a>
					</li>
					<li>
						<a href="">设计师品牌 </a>
					</li>
					<li>
						<a href="">关于正职帮</a>
					</li>
					<li>
						<a href="">联系正职帮</a>
					</li>
				</ul>
			</div>
		</div>