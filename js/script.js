const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";


const buscarPokemons = function () {

    let randomPokemons = [...Array(6)].map(() =>  parseInt(Math.random() * 151));

    let pokemons = {};

    jQuery.when(
    
        /*randomPokemons.map( (v, i) => jQuery.get(BASE_URL + randomPokemons[i]).done( p => pokemons[i] = p)) */

        jQuery.get(BASE_URL + randomPokemons[0]).done( p => pokemons[0] = p ),
    
        jQuery.get(BASE_URL + randomPokemons[1]).done( p => pokemons[1] = p ),
    
        jQuery.get(BASE_URL + randomPokemons[2]).done( p => pokemons[2] = p),
        
        jQuery.get(BASE_URL + randomPokemons[3]).done( p => pokemons[3] = p),
    
        jQuery.get(BASE_URL + randomPokemons[4]).done( p => pokemons[4] = p),
        
        jQuery.get(BASE_URL + randomPokemons[5]).done( p => pokemons[5] = p)
    
    ).then(
        () => criarLinha(pokemons),
        (err) => console.log(err.responseText)
    )
}

const criarLinha = function (linha) {
    
    jQuery(".pokemons .row").remove();

    let row = jQuery(`<div class="row"></div>`);
    row.hide().appendTo(".pokemons");
    
    jQuery.each(linha, function (chave, pokemon) {
        jQuery(`<div class="col-md-2">
                    <div class="panel panel-default">
                        <div class="panel-heading text-center">${pokemon.name}</div>
                        <div class="panel-body">
                            <img class="img-thumbnail center-block" src="${pokemon.sprites.front_default}">
                        </div>
                </div>`).appendTo(row);
    });

    row.show(800);
}

jQuery(document).ready( function() {
    buscarPokemons();
    jQuery("#recarregar").on('click', () =>  buscarPokemons());
});

