
const StyleTemplates = {
    
    mainStyles: `
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f8f9fa;
        }

        /* Header Styles */
        #header {
            background: linear-gradient(135deg, #ff6b35, #f7931e);
            color: white;
            padding: 1rem 0;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            position: sticky;
            top: 0;
            z-index: 1000;
        }

        .navbar {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 2rem;
        }

        .nav-brand h1 {
            font-size: 2rem;
            font-weight: bold;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }

        .nav-menu {
            display: flex;
            gap: 2rem;
        }

        .nav-link {
            color: white;
            text-decoration: none;
            font-weight: 500;
            transition: all 0.3s ease;
            padding: 0.5rem 1rem;
            border-radius: 5px;
        }

        .nav-link:hover {
            background-color: rgba(255,255,255,0.2);
            transform: translateY(-2px);
        }

        /* Main Content */
        #main-content {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
        }

        /* Search Section */
        .search-section {
            text-align: center;
            margin-bottom: 3rem;
            padding: 3rem 0;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 15px;
            color: white;
        }

        .search-section h2 {
            font-size: 2.5rem;
            margin-bottom: 2rem;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }

        .search-box {
            display: flex;
            max-width: 500px;
            margin: 0 auto;
            border-radius: 25px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }

        #search-input {
            flex: 1;
            padding: 1rem 1.5rem;
            border: none;
            font-size: 1.1rem;
            outline: none;
        }

        .search-button {
            background: #ff6b35;
            color: white;
            border: none;
            padding: 1rem 1.5rem;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        .search-button:hover {
            background: #e55a2b;
        }

        /* Categories Section */
        .categories-section {
            margin-bottom: 3rem;
        }

        .categories-section h3 {
            font-size: 1.8rem;
            margin-bottom: 1.5rem;
            color: #2c3e50;
        }

        .categories-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1.5rem;
        }

        .category-card {
            background: white;
            padding: 2rem;
            border-radius: 15px;
            text-align: center;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
            cursor: pointer;
            border: 2px solid transparent;
        }

        .category-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.15);
            border-color: #ff6b35;
        }

        .category-icon {
            font-size: 3rem;
            color: #ff6b35;
            margin-bottom: 1rem;
        }

        .category-name {
            font-size: 1.2rem;
            font-weight: 600;
            color: #2c3e50;
        }

        /* Restaurants Section */
        .restaurants-section {
            margin-bottom: 3rem;
        }

        .restaurants-section h3 {
            font-size: 1.8rem;
            margin-bottom: 1.5rem;
            color: #2c3e50;
        }

        .restaurants-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }

        .restaurant-card {
            background: white;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
            cursor: pointer;
        }

        .restaurant-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }

        .restaurant-image {
            width: 100%;
            height: 200px;
            background: linear-gradient(45deg, #ff6b35, #f7931e);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 3rem;
        }

        .restaurant-info {
            padding: 1.5rem;
        }

        .restaurant-name {
            font-size: 1.3rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
            color: #2c3e50;
        }

        .restaurant-cuisine {
            color: #7f8c8d;
            margin-bottom: 0.5rem;
        }

        .restaurant-rating {
            color: #f39c12;
            font-weight: 600;
        }

        /* Menu Section */
        .menu-section {
            margin-bottom: 3rem;
        }

        .menu-header {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 2rem;
        }

        .back-button {
            background: #3498db;
            color: white;
            border: none;
            padding: 0.8rem 1.5rem;
            border-radius: 25px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        .back-button:hover {
            background: #2980b9;
        }

        .menu-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }

        .menu-item {
            background: white;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
        }

        .menu-item:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        }

        .menu-item-image {
            width: 100%;
            height: 200px;
            background: linear-gradient(45deg, #e74c3c, #c0392b);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 2.5rem;
        }

        .menu-item-info {
            padding: 1.5rem;
        }

        .menu-item-name {
            font-size: 1.2rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
            color: #2c3e50;
        }

        .menu-item-description {
            color: #7f8c8d;
            margin-bottom: 1rem;
            line-height: 1.5;
        }

        .menu-item-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .menu-item-price {
            font-size: 1.3rem;
            font-weight: 600;
            color: #27ae60;
        }

        .add-to-cart-btn {
            background: #ff6b35;
            color: white;
            border: none;
            padding: 0.8rem 1.5rem;
            border-radius: 25px;
            cursor: pointer;
            transition: all 0.3s ease;
            font-weight: 600;
        }

        .add-to-cart-btn:hover {
            background: #e55a2b;
            transform: scale(1.05);
        }

        /* Shopping Cart */
        .shopping-cart {
            position: fixed;
            top: 0;
            right: 0;
            width: 400px;
            height: 100vh;
            background: white;
            box-shadow: -5px 0 15px rgba(0,0,0,0.1);
            z-index: 2000;
            display: flex;
            flex-direction: column;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        }

        .shopping-cart.open {
            transform: translateX(0);
        }

        .shopping-cart.hidden {
            display: none;
        }

        .cart-header {
            background: #ff6b35;
            color: white;
            padding: 1.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .cart-header h3 {
            margin: 0;
            font-size: 1.3rem;
        }

        .close-cart-btn {
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0.5rem;
            border-radius: 50%;
            transition: background-color 0.3s ease;
        }

        .close-cart-btn:hover {
            background: rgba(255,255,255,0.2);
        }

        .cart-items {
            flex: 1;
            padding: 1.5rem;
            overflow-y: auto;
        }

        .cart-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 0;
            border-bottom: 1px solid #ecf0f1;
        }

        .cart-item-info {
            flex: 1;
        }

        .cart-item-name {
            font-weight: 600;
            color: #2c3e50;
            margin-bottom: 0.3rem;
        }

        .cart-item-price {
            color: #27ae60;
            font-weight: 600;
        }

        .cart-item-controls {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .quantity-btn {
            background: #ecf0f1;
            border: none;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            cursor: pointer;
            font-weight: bold;
            transition: background-color 0.3s ease;
        }

        .quantity-btn:hover {
            background: #bdc3c7;
        }

        .cart-item-quantity {
            font-weight: 600;
            min-width: 30px;
            text-align: center;
        }

        .cart-footer {
            background: #f8f9fa;
            padding: 1.5rem;
            border-top: 1px solid #ecf0f1;
        }

        .cart-total {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
            font-size: 1.2rem;
            font-weight: 600;
        }

        .checkout-button {
            width: 100%;
            background: #27ae60;
            color: white;
            border: none;
            padding: 1rem;
            border-radius: 25px;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        .checkout-button:hover {
            background: #229954;
        }

        /* Cart Toggle Button */
        .cart-toggle-btn {
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            background: #ff6b35;
            color: white;
            border: none;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            cursor: pointer;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            transition: all 0.3s ease;
            z-index: 1500;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
        }

        .cart-toggle-btn:hover {
            transform: scale(1.1);
            box-shadow: 0 8px 20px rgba(0,0,0,0.3);
        }

        .cart-toggle-btn.hidden {
            display: none;
        }

        #cart-item-count {
            font-size: 0.8rem;
            background: #e74c3c;
            color: white;
            border-radius: 50%;
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 0.2rem;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .navbar {
                padding: 0 1rem;
            }

            .nav-menu {
                gap: 1rem;
            }

            #main-content {
                padding: 1rem;
            }

            .search-section h2 {
                font-size: 2rem;
            }

            .shopping-cart {
                width: 100%;
            }

            .categories-grid {
                grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            }

            .restaurants-grid {
                grid-template-columns: 1fr;
            }

            .menu-grid {
                grid-template-columns: 1fr;
            }
        }

        /* Utility Classes */
        .hidden {
            display: none !important;
        }

        .fade-in {
            animation: fadeIn 0.5s ease-in;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .shake {
            animation: shake 0.5s ease-in-out;
        }

        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
        }
    `,

    
    animationStyles: `
        .bounce {
            animation: bounce 0.6s ease-in-out;
        }

        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-10px); }
            60% { transform: translateY(-5px); }
        }

        .pulse {
            animation: pulse 2s infinite;
        }

        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
    `,

    
    errorStyles: `
        .error-shake {
            animation: errorShake 0.5s ease-in-out;
        }

        @keyframes errorShake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-10px); }
            75% { transform: translateX(10px); }
        }

        .glitch {
            animation: glitch 0.3s ease-in-out infinite;
        }

        @keyframes glitch {
            0% { transform: translate(0); }
            20% { transform: translate(-2px, 2px); }
            40% { transform: translate(-2px, -2px); }
            60% { transform: translate(2px, 2px); }
            80% { transform: translate(2px, -2px); }
            100% { transform: translate(0); }
        }
    `
};


function applyStyles() {
   
    const mainStyleSheet = document.createElement('style');
    mainStyleSheet.textContent = StyleTemplates.mainStyles;
    document.head.appendChild(mainStyleSheet);

   
    const animationStyleSheet = document.createElement('style');
    animationStyleSheet.textContent = StyleTemplates.animationStyles;
    document.head.appendChild(animationStyleSheet);

   
    const errorStyleSheet = document.createElement('style');
    errorStyleSheet.textContent = StyleTemplates.errorStyles;
    document.head.appendChild(errorStyleSheet);

    console.log('Styles erfolgreich angewendet!');
}


document.addEventListener('DOMContentLoaded', applyStyles);

