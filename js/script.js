
      var CommercejsSpace = new Commerce("chec_eyJpdiI6Im5oeDd2RmRMTDk5TlpVYzlrRGFuSFE9PSIsInZhbHVlIjoidWpWT2pDUENKYncwWkF1ZDAwTnc1WStOdXZDMkNBcER3b1FQaUJjeFdxekVmblliNVlSNGU3dmFDS3ZqUFowSkljdCtxcHhzYllQK2QrNnhUWXhqbXE0cGVid2xpcXhWWTJ4bXM0cjVGejlOZWU2XC81K2V3d0dcL1JKTVg4MTJZUUZ6Tlh2VDdub3lDZXpKWE5XSmpTMnc9PSIsIm1hYyI6IjQ4ZGU3MmJmZDc1NTRlZWNiOTBlNzhiNjRiMTZlZTk1NTA0MzUxOTEzMjQzZDRlNjM3YzcwNjJjMjA4MTQ4ZTcifQ==", false, {
        url: 'https://api.chec.io',
        axiosConfig: {
          headers: {
            'Chec-Version': '2020-08-26',
          },
        },
      });
      CommercejsSpace.cart.retrieve().then(function(data){
          Spaces.cartUpdate(data);
      });
      $(document).ready(function() {
          $('.product-details-overlay').on('click', function(el){
              if ($(el.target).hasClass('product-details-overlay')){
                  hideProductDetailsModal();
              }
          });
          $('#search').hideseek({
              list: '.hideseek-data',
              nodata: 'No products found',
              attribute: 'text',
              highlight: false,
              ignore: 'ignore',
              navigation: false,
              ignore_accents: false,
              hidden_mode: false
          });
      });
      $('.hover-overlay').on("touchstart", function(e) {
          "use strict"; //satisfy the code inspectors
          var link = $(this); //preselect the link
          if (link.hasClass('hover')) {
              return true;
          } else {
              link.addClass("hover");
              $('.hover-overlay').not(this).removeClass("hover");
              e.preventDefault();
              return false; //extra, and to make sure the function has consistent return points
          }
      });
      function cartShow() {
          $('#shopping-cart #cart-active-overlay ').show();
          $('#shopping-cart #cart-overview').removeClass('inactive');
      }
      function cartHide() {
          $('#shopping-cart #cart-overview').addClass('inactive');
          $('#shopping-cart #cart-active-overlay ').hide();
      }
      function showProductDetailsModal(id) {
          $('.product[data-product-id=' + id + ']').addClass('details-modal');
          $('body').addClass('no-scroll');
          $('.product[data-product-id=' + id + '] .product-image--main').hide();
          $('.product[data-product-id=' + id + '] .product-images')
              .flickity({
                  cellAlign: 'center',
                  adaptiveHeight: true,
                  wrapAround: true,
              });
        }
      function hideProductDetailsModal() {
          $('.product').removeClass('details-modal');
          $('body').removeClass('no-scroll');
          $('.product-image--main').show();
      }
  </script>
  <script type="text/javascript">
    
    const produtos = async() => {
      const url = "https://api-in-product-for-store.herokuapp.com";
      const data = await fetch(url);
      const res = await data.json();
      const req = document.getElementById("div");
      const div = document.createElement("li");
      div.innerHTML = `<a>${res.name}</a>`
      req.appendChild(div)
      console.log(res);

    }
    
    const url1 = "https://pokeapi.co/api/v2/pokemon"
    const url2 = 'https://api-in-product-for-store.herokuapp.com'
    const app = document.getElementById('root');
    const container = document.createElement('div');
    container.setAttribute('class', 'container');


    app.appendChild(container);

    fetch(url2)
      .then(response => response.json())
      .then(data => {
        data.forEach(movie => {
          const card = document.createElement('div');
          card.setAttribute('class', 'card');

          const h1 = document.createElement('h5');
          h1.textContent = movie.title;

          const p = document.createElement('p');
          movie.description = movie.description.substring(0, 300);
          p.textContent = `${movie.description}...`;

          container.appendChild(card);
          card.appendChild(h1);
          card.appendChild(p);
        });
      }).catch(err => {
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = `Essa não! Não está funcionando!`
        app.appendChild(errorMessage);
      });

