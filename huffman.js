function Node (letter, freq, used, father, code) {
	this.letter = letter;
	this.freq = freq;
	this.used = used;
	this.father = father;
	this.code = code;
};

let Stroka= 'abcd';
let alphabet = new Array ();
let tree = new Array ();


for(i = 0; i < Stroka.length; i++){
    if (Stroka[i] in alphabet){
        alphabet[Stroka[i]]++;
    }
    else{
        alphabet[Stroka[i]] = 0;
    }
}


    for (i in alphabet){
        let n = new Node(i, alphabet[i], 0, null, '0');
        tree.push(n); }
let treeLength = tree.length;


for (let i = 0; i < treeLength - 1; i++) {
    mind = -1;
    mind2 = -2;
    firstMinFreq = Stroka.length;
    minFreq2 = Stroka.length;
    for (let j = 0; j < tree.length; j++) {
        if ((tree[j].used == 0) && (tree[j].freq <= minFreq2)) {
            firstMinFreq = minFreq2;
            mind = mind2;
            mind2 = j;
            minFreq2 = tree[j].freq;
        } else if (tree[j].used == 0 && tree[j].freq <= firstMinFreq) {
		  firstMinFreq = tree[j].freq;
            mind = j;
        }
    }
        tree[mind].used = 1;
        tree[mind2].used = 1;
        tree[mind].link = tree.length;
        tree[mind2].link = tree.length;
        tree[mind].code = '0';
        tree[mind2].code = '1';
        let p = new Node(tree[mind].letter + tree[mind2].letter, tree[mind].freq + tree[mind2].freq, 0, null, '');
        tree.push(p);
}


for (let i = tree.length -2; i > -1; i--) {
    tree[i].code = tree[tree[i].link].code + tree[i].code;}


let codedStrochka = '';
for (let i = 0; i < Stroka.length; i++) {
    for (let j = 0; j < tree.length; j++) {
        if (Stroka[i] == tree[j].letter) {
            codedStrochka += tree[j].code + "|";
        }
    }
}
console.log(codedStrochka);


let codedStroka = '';
for (let i = 0; i < Stroka.length; i++) {
    for (let j = 0; j < tree.length; j++) {
        if (Stroka[i] == tree[j].letter) {
            codedStroka += tree[j].code;
        }
    }
}


let decodedStroka = '';
let codeChar = '';
for (let i = 0; i < codedStroka.length; i++) {
    codeChar += codedStroka[i];
    for (let j = 0; j < treeLength; j++) {
        if (codeChar == tree[j].code) {
            decodedStroka += tree[j].letter;
            codeChar = '';
        }
    }
}


console.log(decodedStroka);
console.log(tree);
