import { doc } from 'prettier';

/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    var button = document.createElement('button');
    button.textContent = 'Удали меня';
    document.body.append(button);

    button.addEventListener('click', () =>
        document.body.removeChild(document.querySelector('button')),
    );
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    document.body.appendChild(document.createElement('ul'));
    for (let i = 0; i < arr.length; i++) {
        var li = document.createElement('li');
        li.textContent = arr[i];
        document.querySelector('ul').appendChild(li);

        document
            .querySelectorAll('li')
            [i].addEventListener(
                'mouseover',
                () => (document.querySelectorAll('li')[i].title = arr[i]),
            );
    }
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    var a = document.createElement('a');
    a.href = 'https://tensor.ru/';
    a.textContent = 'tensor';
    document.body.appendChild(a);

    a.addEventListener(
        'click',
        function (event) {
            a.textContent = a.textContent + ' ' + a.href;
            event.preventDefault();
        },
        { once: true },
    );
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    document.body.appendChild(document.createElement('ul'));
    var li = document.createElement('li');
    li.textContent = 'Пункт';
    document.querySelector('ul').appendChild(li);
    var button = document.createElement('button');
    button.textContent = 'Добавить пункт';
    document.body.appendChild(button);

    document
        .querySelectorAll('li')[0]
        .addEventListener(
            'click',
            () =>
                (document.querySelectorAll('li')[0].textContent =
                    document.querySelectorAll('li')[0].textContent + '!'),
        );

    button.addEventListener('click', function () {
        var element = document.createElement('li');
        element.textContent = 'Пункт';
        document.querySelector('ul').appendChild(element);

        var elements = document.querySelectorAll('li');
        document
            .querySelectorAll('li')
            [elements.length - 1].addEventListener(
                'click',
                () =>
                    (document.querySelectorAll('li')[
                        elements.length - 1
                    ].textContent =
                        document.querySelectorAll('li')[elements.length - 1]
                            .textContent + '!'),
            );
    });
}
