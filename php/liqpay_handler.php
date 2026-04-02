<?php
// liqpay_handler.php
header('Content-Type: application/json');

// --- НАЛАШТУВАННЯ LIQPAY ---
// ВСТАВТЕ СЮДИ ВАШІ КЛЮЧІ З КАБІНЕТУ LIQPAY:
$public_key = 'PUBLIC_KEY_ПІДСТАВИТИ_ТУТ';
$private_key = 'PRIVATE_KEY_ПІДСТАВИТИ_ТУТ';

// Отримуємо дані від фронтенду
$input = json_decode(file_get_contents('php://input'), true);

if (!$input || !isset($input['amount'])) {
    echo json_encode(['error' => 'Invalid data']);
    exit;
}

$amount = $input['amount'];
$order_id = 'order_' . time() . '_' . rand(100, 999);
$description = 'Замовлення Studio Specialty Coffee';

// Формуємо масив параметрів для LiqPay
$params = [
    'public_key'  => $public_key,
    'version'     => '3',
    'action'      => 'pay',
    'amount'      => $amount,
    'currency'    => 'UAH',
    'description' => $description,
    'order_id'    => $order_id,
    'result_url'  => 'https://' . $_SERVER['HTTP_HOST'] . '/', // Куди повернутись після оплати (замініть на свою сторінку подяки за бажанням)
    'language'    => 'uk'
];

// Генеруємо data та signature (алгоритм LiqPay)
$data = base64_encode(json_encode($params));
$signature = base64_encode(sha1($private_key . $data . $private_key, true));

// Відправляємо готові параметри назад у JavaScript
echo json_encode([
    'data' => $data,
    'signature' => $signature
]);
?>
