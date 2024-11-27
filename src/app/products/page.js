export default function ProductsPage() {
    const products = [
        { name: 'Fresh Eggs', price: '$5/dozen' },
        { name: 'Grass-fed Meat', price: '$20/lb' },
        { name: 'Farm Tours', price: '$50/person' },
    ];

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6">Our Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {products.map((product, index) => (
                    <div key={index} className="border p-4 rounded shadow">
                        <h2 className="text-xl font-bold">{product.name}</h2>
                        <p>{product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}