function createSettingPage() {
    const divSettingPage = document.createElement('div');
    divSettingPage.className = 'settingPage'
    document.querySelector('.app').prepend(divSettingPage);

}

export default createSettingPage;