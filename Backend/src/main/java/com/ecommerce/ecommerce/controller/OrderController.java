package com.ecommerce.ecommerce.controller;

import com.ecommerce.ecommerce.model.Order;
import com.ecommerce.ecommerce.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173") // React connect panna
@RestController
@RequestMapping("/orders")
public class OrderController {

    @Autowired
    private OrderRepository orderRepository;

    // Create Order (POST)
    @PostMapping
    public Order createOrder(@RequestBody Order order) {
        return orderRepository.save(order);
    }

    // Get All Orders (GET)
    @GetMapping
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    // Delete Order (DELETE)
    @DeleteMapping("/{id}")
    public void deleteOrder(@PathVariable Long id) {
        orderRepository.deleteById(id);
    }

    // Update Order (PUT)
    @PutMapping("/{id}")
    public Order updateOrder(@PathVariable Long id, @RequestBody Order updatedOrder) {
        return orderRepository.findById(id).map(order -> {
            order.setName(updatedOrder.getName());
            order.setEmail(updatedOrder.getEmail());
            order.setAddress(updatedOrder.getAddress());
            order.setCity(updatedOrder.getCity());
            order.setZip(updatedOrder.getZip());
            order.setPayment(updatedOrder.getPayment());
            order.setCart(updatedOrder.getCart());
            order.setTotal(updatedOrder.getTotal());
            return orderRepository.save(order);
        }).orElseThrow(() -> new RuntimeException("Order not found with id " + id));
    }
}
