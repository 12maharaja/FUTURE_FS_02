package com.ecommerce.ecommerce.model;

import jakarta.persistence.*;

@Entity
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;
    private String address;
    private String city;
    private String zip;
    private String payment;

    @Column(columnDefinition = "TEXT") // cart JSON string save பண்ண
    private String cart;

    private Double total;

    // 🟢 Getters and Setters (Lombok இருந்தா @Data use பண்ணலாம்)

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getAddress() { return address; }
    public void setAddress(String address) { this.address = address; }

    public String getCity() { return city; }
    public void setCity(String city) { this.city = city; }

    public String getZip() { return zip; }
    public void setZip(String zip) { this.zip = zip; }

    public String getPayment() { return payment; }
    public void setPayment(String payment) { this.payment = payment; }

    public String getCart() { return cart; }
    public void setCart(String cart) { this.cart = cart; }

    public Double getTotal() { return total; }
    public void setTotal(Double total) { this.total = total; }
}
