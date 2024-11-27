function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('open');
}

function navigateTo(sectionId) {
    const content = document.getElementById('main-content');
    let htmlContent = '';

    switch (sectionId) {
        case 'quem-somos':
            htmlContent = `
                <section class="section">
                    <h2>Quem Somos</h2>
                    <p>Somos uma equipe dedicada ao desenvolvimento de soluções naturais e seguras para o manejo da ansiedade, utilizando os benefícios comprovados da fitoterapia.</p>
                </section>`;
            break;
        case 'comprar':
            htmlContent = `
                <section class="section">
                    <h2>Comprar</h2>
                    <p>Adquira nossa bala fitoterápica agora mesmo e experimente os benefícios naturais para o alívio da ansiedade. Clique no botão abaixo para comprar!</p>
                    <button style="padding: 10px 20px; background: #ff4d4d; color: white; border: none; border-radius: 5px; cursor: pointer;">Comprar Agora</button>
                </section>`;
            break;
        case 'perguntas':
            htmlContent = `
                <section class="section">
                    <h2>Perguntas Frequentes</h2>
                    <p>Aqui você encontra respostas para as dúvidas mais comuns sobre nosso produto. Caso não encontre o que procura, entre em contato conosco.</p>
                </section>`;
            break;
        default:
            htmlContent = `
                <section class="section">
                    <h2>Resumo</h2>
                    <p>Este estudo visa criar uma bala fitoterápica com efeitos ansiolíticos...</p>
                </section>`;
    }

    content.innerHTML = htmlContent;
}
