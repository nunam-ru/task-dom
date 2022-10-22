/*
  В функцию appendToBody передаются 3 параметра:
  tag - имя тега, content - содержимое тега и count - количество вставок.
  Необходимо, чтобы функция осуществила вставку на страницу указанный тег с указанным содержимым указанное число раз.
  Считаем, что всегда передается тег, допускающий вставку текста в качестве своего содержимого (P, DIV, I и пр.).
*/
export function appendToBody(tag, content, count) {
    for (let i = 0; i < count; i++) {
        const tagElem = document.createElement(tag);
        tagElem.innerHTML = content;
        document.body.appendChild(tagElem);
    }
}

/*
Создайте дерево вложенных тегов DIV.
Каждый узел дерева должен содержать childrenCount узлов.
Глубина дерева задается параметром level.
Каждый элемент должен иметь класс вида item_n, где n - глубина вложенности элемента. (Нумерацию ведем с единицы).
Сформированное дерево верните в качестве результата работы функции.
*/
export function generateTree(childrenCount, level) {
    const generateNodes = (childrenCount, depth) => {
        let result = document.createElement('div');
        result.classList.add('item_' + depth);
        if (depth < level) {
            for (let i = 0; i < childrenCount; i++) {
                result.appendChild(generateNodes(childrenCount, depth + 1));
            }
        }
        return result;
    };
    return generateNodes(childrenCount, 1);
}

/*
Используйте функцию для создания дерева тегов DIV из предыдущего задания.
Создайте дерево с вложенностью 3 и числом элементов в каждом узле 2.
Далее замените все узлы второго уровня (т.е. имеющие класс item_2) на теги SECTION.
Остальную структуру дерева сохраните неизменной, включая классы и те элементы,
которые находились внутри переписанных тегов.
Сформированное дерево верните в качестве результата работы функции.
*/
export function replaceNodes() {
    let tree = generateTree(2, 3);
    tree.childNodes.forEach((e) => {
        if (e.className == 'item_2') {
            let childs = e.childNodes;
            let section = document.createElement('section');
            section.className = 'item_2';
            while (e.childNodes.length > 0) {
                section.appendChild(e.childNodes[0]);
            }
            e.replaceWith(section);
        }
    });
    return tree;
}
