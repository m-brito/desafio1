var produtos = [
    {
        id: 1,
        nome: 'Laranja',
        preco: 'R$2,98',
    },
    {
        id: 2,
        nome: 'Maçã',
        preco: 'R$7,50',
    },
    {
        id: 3,
        nome: 'Banana',
        preco: 'R$5,98',
    },
    {
        id: 4,
        nome: 'Uva',
        preco: 'R$3,98',
    },
    {
        id: 5,
        nome: 'Tangerina',
        preco: 'R$2,98',
    },
    {
        id: 6,
        nome: 'Mamão',
        preco: 'R$6,23',
    },
];

window.onload = () => {
    document.querySelector("div#principal form").addEventListener("submit", (event) => {
        event.preventDefault();
        if(event.submitter.id == "bttComprar") {
            const produto = document.querySelector("div#principal form input[name=fruta]");
            let achou = false;
            for(let x=0; x<produtos.length; x++) {
                if(produtos[x].nome == produto.value) {
                    alert(`O quilo do(a) ${produtos[x].nome} é ${produtos[x].preco}`)
                    achou = true;
                    produto.value = "";
                }
            }
            if(!achou) {
                alert("Produto não encontrado, tente ver os nossos produtos disponiveis!")
                produto.value = "";
            }
        }
    })

    document.querySelector("#principal div#bttVerProdutos").addEventListener("click", () => {
        document.getElementById("principalVerProdutos").style.display = "Flex";
        document.querySelector("#principalVerProdutos #cartoesProdutos").innerHTML = "";
        for(let x=0; x<produtos.length; x++) {
            const cartao = `
                <div id="cartoesProdutos">
                    <div class="produto" id="${produtos[x].id}">
                        <div class="posicaoProduto">
                            #${x+1}
                        </div>
                        <div class="dadosProduto">
                            <p>${produtos[x].nome}</p>
                            <p>${produtos[x].preco}</p>
                        </div>
                    </div>
                </div>
            `;
            document.querySelector("#principalVerProdutos #cartoesProdutos").innerHTML += cartao
        }
    })

    document.getElementById("fecharProdutos").addEventListener("click", () => {
        document.getElementById("principalVerProdutos").classList.add("fecharTela");
        setTimeout(() => {
            document.getElementById("principalVerProdutos").classList.remove("fecharTela");
            document.getElementById("principalVerProdutos").style.display = "None";
        }, 1900)
    })
}