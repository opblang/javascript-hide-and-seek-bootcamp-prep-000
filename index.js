var getFirstSelector = (x) =>
  document.querySelector(x)

var nestedTarget = () =>
  document.querySelector('#nested .target')

var deepestChild = () =>
  document.querySelector('#grand-node div div div div')

var increaseRankBy = (x) =>
  [].slice.call(document.querySelectorAll('.ranked-list'))
    .forEach( y =>
      [].slice.call(y.children)
        .forEach( z =>
          z.innerHTML = parseInt(z.innerHTML) + x ) )
