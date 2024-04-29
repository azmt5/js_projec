<style>


    .buttons{
        display: flex;
        width: 100px;
        height: 50px;
        flex-wrap: wrap;
    }
    
    button{
        color:black
    }
    
    </style>
    
    
    <div>
        <input id="panel" type="text">
        <div onclick="addValue()" class="buttons">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>0</button>
        <button>-</button>
        <button>/</button>
        <button>+</button>
        <button>*</button>
        <button>=</button>
        <button>*</button>
    </div>
    
    </div>
    
    <script>
        function addValue(){
    
            if(event.target.innerText == '='){
                let calculater = eval(panel.value);
                panel.value = calculater;
            }else{
                panel.value += event.target.innerText
    
            }
            // console.log(event.target.innerText);
        }
    
    
    </script>
