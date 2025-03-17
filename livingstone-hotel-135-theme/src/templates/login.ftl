<div class="custom-login-page">
    <div class="login-container">
        <div class="login-header">
            <img src="${themeDisplay.getPathThemeImages()}/logo.png" alt="${company_name}" />
            <h2>
                <@liferay.language key="sign-in" />
            </h2>
            <p>
                <@liferay.language key="sign-in-to-your-account" default="Entre com suas credenciais" />
            </p>
        </div>
        <!-- Mantém o portlet de login original para preservar toda a funcionalidade -->
        <div class="portlet-login-wrapper">
            <@liferay_portlet["runtime"]
                defaultPreferences="${freeMarkerPortletPreferences}"
                portletProviderAction=portletProviderAction.VIEW
                portletProviderClassName="com.liferay.login.web.internal.portlet.action.LoginPortlet" />
        </div>
        <div class="login-footer">
            <p>
                <@liferay.language key="do-not-have-an-account-yet" default="Ainda não tem uma conta?" />
            </p>
            <a href="/web/guest/criar-conta" class="create-account-button">
                <@liferay.language key="create-account" />
            </a>
        </div>
    </div>
</div>