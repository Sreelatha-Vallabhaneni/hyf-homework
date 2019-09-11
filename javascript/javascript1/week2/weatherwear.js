// Weather wear

function clothesToWear(temperature) {
    switch (true) {
        case temperature >= 25:
            console.log('Wear Shorts, Swim trunks, Inner wear, Bikini and Sunglasses,');
            break;
        case temperature < 25 && temperature >= 20:
            console.log('Wear Shorts and T - shirts,');
            break;
        case temperature < 20 && temperature >= 15:
            console.log('Wear Skirts, leggings, Leather jackets, and tights,');
            break;
        case temperature < 15 && temperature >= 5:
            console.log('Wear gloves, scraf, Jumper, Long sleev tops, Jeans, Sweaters and hoodie,');
            break;
        case temperature < 5:
            console.log('Wear Winter jackets,Long coats, Mittens, socks, beanies, and Fleece jacket,');
            break;
        default:
            'Wear some clothes!';
            break;
    }
    return `Temperature is ${temperature} degrees.`;
}
console.log(clothesToWear(18));