<!DOCTYPE html>
<#include init />
<html class="${root_css_class}" dir="<@liferay.language key=" lang.dir" />" lang="${w3c_language_id}">

<head>
	<title>
		${html_title}
	</title>
	<meta content="initial-scale=1.0, width=device-width" name="viewport" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="Living Stone Hotel - Luxo e conforto em cada detalhe para uma experiência única de hospedagem">
	<meta name="keywords" content="hotel, luxo, hospedagem, acomodações, suítes, spa, reservas">
	<title>Living Stone Hotel - Luxo & Conforto</title>
	<!-- Links para CSS externos -->
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
	<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Raleway:wght@300;400;500;700&display=swap" rel="stylesheet">
	<@liferay_util["include"]
		page=top_head_include />
	<link rel="stylesheet" href="${htmlUtil.escape(portalUtil.getStaticResourceURL(request, '${css_folder}/main.css'))}">
</head>

<body class="${css_class}">
	<div class="container-fluid position-relative" id="wrapper">
		<@liferay_ui["quick-access"]
			contentId="#main-content" />
		<@liferay_util["include"]
			page=body_top_include />
		<@liferay.control_menu />
		<#include "${full_templates_path}/header.ftl">
			<#if themeDisplay.isSignedIn()>
				<#include "${full_templates_path}/hero.ftl">
			</#if>
			<main id="content" role="main">
				<h1 class="hide-accessible sr-only">
					${the_title}
				</h1>
				<#if selectable>
					<@liferay_util["include"]
						page=content_include />
					<#else>
						${portletDisplay.recycle()}
						${portletDisplay.setTitle(the_title)}
						<@liferay_theme["wrap-portlet"]
							page="portlet.ftl">
							<@liferay_util["include"]
								page=content_include />
							</@>
				</#if>
				<#-- <#include "${full_templates_path}/depoimentos.ftl"> -->
			</main>
			<#-- <#include "${full_templates_path}/quartos.ftl"> -->
				<#if themeDisplay.isSignedIn()>
					<#include "${full_templates_path}/about.ftl">
						<#include "${full_templates_path}/services.ftl">
							<#include "${full_templates_path}/contacts.ftl">
								<@liferay_util["include"]
									page=body_bottom_include />
								<@liferay_util["include"]
									page=bottom_include />
				</#if>
				<#include "${full_templates_path}/footer.ftl">
	</div>
	<!-- inject:js -->
	<!-- endinject -->
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
	<script src="${javascript_folder}/main.js"></script>>
</body>

</html>