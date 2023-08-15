import { useState } from "react";

function OrderMenu() {
    const data = [
        {
            'id': 0,
            'productName': '珍珠奶茶',
            'productDescription': '香濃奶茶搭配QQ珍珠',
            'productPrice': 50,
            'productInventory': 20
        },
        {
            'id': 1,
            'productName': '冬瓜檸檬',
            'productDescription': '清新冬瓜配上新鮮檸檬',
            'productPrice': 45,
            'productInventory': 18
        },
        {
            'id': 2,
            'productName': '翡翠檸檬',
            'productDescription': '綠茶與檸檬的完美結合',
            'productPrice': 55,
            'productInventory': 34
        },
        {
            'id': 3,
            'productName': '四季春茶',
            'productDescription': '香醇四季春茶，回甘無比',
            'productPrice': 45,
            'productInventory': 10
        },
        {
            'id': 4,
            'productName': '阿薩姆奶茶',
            'productDescription': '阿薩姆紅茶搭配香醇鮮奶',
            'productPrice': 50,
            'productInventory': 25
        },
        {
            'id': 5,
            'productName': '檸檬冰茶',
            'productDescription': '檸檬與冰茶的清新組合',
            'productPrice': 45,
            'productInventory': 20
        },
        {
            'id': 6,
            'productName': '芒果綠茶',
            'productDescription': '芒果與綠茶的獨特風味',
            'productPrice': 55,
            'productInventory': 18
        },
        {
            'id': 7,
            'productName': '抹茶拿鐵',
            'productDescription': '抹茶與鮮奶的絕配	',
            'productPrice': 60,
            'productInventory': 20
        }
    ]
    const [product, setProduct] = useState(data)
    const [newProductName, setNewProductName] = useState(data.map(() => ''));

    function reduceInventory(index){
        const updateProduct = [...product];

        if (updateProduct[index].productInventory > 0) {
            updateProduct[index].productInventory -= 1;
        }
        setProduct(updateProduct)
    }

    function addInventory(index){
        const updateProduct = [...product];

        if (updateProduct[index].productInventory < 999) {
            updateProduct[index].productInventory += 1;
        }
        setProduct(updateProduct)
    }

    function renameProduct(event, index) {
        console.log('event====>', event);
        const updateProduct = [...product];
        updateProduct[index].productName = newProductName[index];
        setNewProductName(updateProduct);

        const updateNewProductName = [...newProductName];
        updateNewProductName[index] = '';
        setNewProductName(updateNewProductName)
    }

    return (
    <>
        <table>
        <thead>
            <tr>
            <th scope="col">品項</th>
            <th scope="col">描述</th>
            <th scope="col">價格</th>
            <th scope="col">庫存</th>
            <th scope="col">調整庫存</th>
            <th scope="col">更改名稱</th>

            </tr>
            </thead>
            <tbody>
            {product.map((item, index) => {
                return (
                <tr key={item.id}>
                    <td>{item.productName}</td>
                    <td>{item.productDescription}</td>
                    <td>{item.productPrice}</td>
                    <td>{item.productInventory}</td>
                    <td>
                        <button onClick = { () => reduceInventory(index)}> - </button>
                        &nbsp;&nbsp;
                        <button onClick = { () => addInventory(index)}> + </button>
                    </td>
                    <td>
                        <input id={`productName-${index}`} 
                               type="text" 
                               value={newProductName[index]}
                               onChange={(event) => {
                                const updatedNewProductName = [...newProductName];
                                updatedNewProductName[index] = event.target.value;
                                setNewProductName(updatedNewProductName);
                                }}
                        />
                        <label htmlFor={`productName-${index}`}></label>
                        &nbsp;
                    </td>
                    <td>
                        <button onClick = { (event) => renameProduct(event, index)}> 確認 </button>
                    </td>
                </tr>
                )
            })}
            </tbody>
        </table>
        </>
    )
}


export default OrderMenu