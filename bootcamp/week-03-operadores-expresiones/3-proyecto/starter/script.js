// ============================================
// PROYECTO SEMANA 03: Calculadora de Dominio
// ============================================
// Adapta este archivo a tu dominio asignado.
//
// Ejemplos con dominios no asignables:
// - Planetario    → calcular ingresos por función, capacidad disponible
// - Acuario       → calcular costo de alimentación, volumen total de tanques
// - Museo         → calcular valor de exhibición, costo de entrada
// - Zoológico     → calcular gasto diario por especie, total de visitantes
// - Observatorio  → calcular duración total de eventos, aforo restante
// ============================================

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

// TODO: Define las constantes base de tu dominio
// Ejemplos con dominios no asignables:
//   Planetario:   TICKET_PRICE = 12_000, MAX_CAPACITY = 45
//   Acuario:      DAILY_FEEDING_KG = 150, ENTRY_PRICE = 35_000
//   Museo:        ADULT_TICKET = 20_000, GUIDED_TOUR = 15_000
//   Zoológico:    FOOD_COST_PER_DAY = 500_000, MAX_VISITORS = 800
//   Observatorio: SESSION_DURATION = 90, TICKET_PRICE = 18_000

// const EXAMPLE_CONSTANT = 0; // TODO: Reemplazar con tus constantes
const SHIRT_PRICE = 50_000;
const SHOES_PRICE = 120_000;
const JACKET_PRICE = 130_000;
const SHORTS_PRICE = 25_000;
const MAX_STOCK = 100;
// ============================================
// SECCIÓN 2: Operaciones aritméticas
// ============================================
console.log("=== Operaciones básicas ===");

// TODO: Calcula totales, subtotales o valores clave de tu dominio
// Usa: +, -, *, /, %, **
// Etiqueta cada resultado con console.log()

// Ejemplo con dominio Planetario (NO copiar):
// const ticketPrice = 12_000;
// const attendees = 38;
// const totalRevenue = ticketPrice * attendees;
// console.log("Ingresos función:", totalRevenue);
// const remainingSeats = 45 - attendees;
// console.log("Asientos disponibles:", remainingSeats);
const shirtsSold = 5;
const shoesSold = 4;
const jacketSold = 2;
const shortsSold = 5;

const totalShirts = SHIRT_PRICE * shirtsSold;
console.log("Total camisetas:", totalShirts);
const totalShoes = SHOES_PRICE * shoesSold;
console.log("Total zapatos:", totalShoes);
const totalJacket = JACKET_PRICE * jacketSold;
console.log("Total chaquetas", totalJacket)
const totalShorts = SHORTS_PRICE * shortsSold;
console.log("Total pantalonetas", totalShorts)
const totalSales = totalShirts + totalShoes + totalJacket + totalShorts;
console.log("Total ventas:", totalSales);
const remainingStock = MAX_STOCK - (shirtsSold + shoesSold + jacketSold + shortsSold);
console.log("Stock restante:", remainingStock);

console.log("");

// ============================================
// SECCIÓN 3: Asignación compuesta
// ============================================
console.log("=== Asignación compuesta ===");

// TODO: Usa +=, -=, *=, /= para actualizar valores acumulados
// Muestra el valor antes y después de cada operación

// Ejemplo (NO copiar):
// let runningTotal = 0;
// runningTotal += 25_000;
// console.log("Tras primer item:", runningTotal);
// runningTotal += 18_000;
// console.log("Tras segundo item:", runningTotal);
// runningTotal *= 0.90; // descuento del 10%
// console.log("Con descuento:", runningTotal);
let total = 0; 
total += totalShirts;
console.log("Después de camisetas:", total);

total += totalShoes;
console.log("Después de zapatos:", total);

total += totalJacket;
console.log("Despues de chaquetas", total)

total += totalShorts;
console.log("Despues de pantalonetas", total)

total *= 0.9; // descuento del 10%
console.log("Con descuento:", total);

console.log("");

// ============================================
// SECCIÓN 4: Comparación estricta
// ============================================
console.log("=== Validaciones con === ===");

// TODO: Valida condiciones usando === y operadores de orden
// NUNCA uses == (penalización en la rúbrica)

// Ejemplo (NO copiar):
// const daysLate = 5;
// const isOnTime = daysLate === 0;
// console.log("¿Entregado a tiempo?", isOnTime);
// const hasFine = daysLate > 0;
// console.log("¿Tiene multa?", hasFine);
const noSales = totalSales === 0;
console.log("¿No hubo ventas?", noSales);

const highSale = totalSales >= 200_000;
console.log("¿Venta alta?", highSale);

const exactStock = remainingStock === 0;
console.log("¿Stock agotado?", exactStock);

console.log("");

// ============================================
// SECCIÓN 5: Operadores lógicos
// ============================================
console.log("=== Condiciones lógicas ===");

// TODO: Combina condiciones con &&, ||, !
// Al menos una condición con && y una con ||

// Ejemplo (NO copiar):
// const isMember = true;
// const purchaseAmount = 150_000;
// const qualifiesForDiscount = isMember && purchaseAmount >= 100_000;
// console.log("¿Descuento aplicable?", qualifiesForDiscount);
const isVip = true;

const applyDiscount = isVip && totalSales >= 100_000;
console.log("¿Aplica descuento?", applyDiscount);

const importantSale = totalSales >= 150_000 || isVip;
console.log("¿Venta importante?", importantSale);

const hasStock = remainingStock > 0;
const noStock = !hasStock;

console.log("¿sin stock?", noStock);

console.log("");

// ============================================
// SECCIÓN 6: Resumen final
// ============================================
console.log("=== Resumen ===");

// TODO: Muestra un resumen con los valores más importantes
// calculados en las secciones anteriores
console.log("Ventas totales:", totalSales);
console.log("Total con descuento:", total);
console.log("Stock restante:", remainingStock);
console.log("¿Cliente VIP?", isVip);

console.log("");