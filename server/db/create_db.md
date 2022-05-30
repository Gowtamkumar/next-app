
#store 
    
    id     UUID,
    name   STRING,
    is_active: BOOLEAN

#Peoples 

    ## user
        id                 UUID,
        username           STRING,
        password           STRING,
        user_type          STRING (simple-array),
        employee_id        INTEGER,
        suppiler_id        INTEGER,
        customer_id        INTEGER,
        store_id           UUID (store_name)
        is_active          BOOLEAN,

        created_at              TIMESTAMP WITH TIME ZONE,
        updated_at              TIMESTAMP WITH TIME ZONE,


    ## customer
        id                  UUID,
        name                STRING,
        email               STRING,               
        phone_no            Number,
        address             STRING,
        store_id            UUID,

        created_at          TIMESTAMP WITH TIME ZONE,
        updated_at          TIMESTAMP WITH TIME ZONE,


    ## Supplier
        id                  UUID,
        name                STRING,
        email               STRING,
        phone_no            Number,
        address             STRING,
        store_id            UUID,

        created_at          TIMESTAMP WITH TIME ZONE,
        updated_at          TIMESTAMP WITH TIME ZONE,

    ## Employee
        id                  UUID,
        name                STRING,
        email               STRING,               
        phone_no            Number,
        nid                 Number, (Unique)
        nationality         STRING,
        present_address     STRING,
        permanent_address   STRING,
        dob                 STRING,
        gender              STRING,
        marital_status      STRING,
        photo               STRING,
        religion            STRING,
        store_id            UUID,

        created_at          TIMESTAMP WITH TIME ZONE,
        updated_at          TIMESTAMP WITH TIME ZONE,

## Food Managment
    
    #cuisine
        id                  UUID,
        name                STRING,
        description         STRING,    
        store_id            UUID,    
        status              STRING/Boolean


    #category
        id                  UUID,
        name                STRING,
        description         STRING,    
        store_id            UUID,    
        status              STRING/Boolean

    #food_item
        id                  UUID,
        name                STRING,
        cuisine_id          STRING,
        description         STRING,    
        category_id         UUID,
        size                STRING,
        price                STRING,
        photo               STRING,
        store_id            UUID,    
        status              STRING/Boolean

    #ingredient
        id              UUID,
        name            STRING,
        type            STRING,
        qty             float,    
        price           float,    
        uom             STRING, (kg, meter, dozen, liter, unit ) Uom(unit of Measure)
        store_id        UUID,    
        status          STRING/Boolean


        
#Foodingredients
        id              UUID,
        ingredientId    UUID,
        qty             STRING,    
        store_id        UUID,    


## Table Managment

    #table
        id              UUID,
        name            STRING,
        location_id     UUID, 
        capacity        STRING  
        description     STRING,
        store_id        UUID,    
        status          STRING/Boolean

    #location
        id              UUID,
        name            STRING, 
        description     STRING,
        store_id        UUID,    
        status          STRING/Boolean


### Orders

    ## sales

    id SERIAL NOT NULL,
    date  DATE,
    customer_id INTEGER,
    sub_total NUMERIC(15,4), -- unit_price * quantity
    total_items INTEGER, -- total number of product types
    total_qty INTEGER,  -- total number of products
    total_product_discount  NUMERIC(15,4),
    
    order_discount  NUMERIC(15,4),
    order_discount_type  VARCHAR(255),
    total_discount  NUMERIC(15,4), -- total_product_discount + order_discount

    total_product_tax  NUMERIC(15,4),
    order_tax  NUMERIC(15,4),
    order_tax_type  VARCHAR(255),
    total_tax  NUMERIC(15,4), -- total_product_tax + order_tax
    total_charge NUMERIC(15,4),
    grand_total NUMERIC(15,4), -- sub_total - total_discount + total_tax
    net_payable NUMERIC(15,4), -- grand_total + total_charge
    
    paid_amount  NUMERIC(15,4),

    ordered_at TIMESTAMP WITH TIME ZONE,
    delivered_at TIMESTAMP WITH TIME ZONE,

    status VARCHAR(255),
    store_id  INTEGER,
    hold_ref  VARCHAR(255),
    remarks TEXT,

    created_by INTEGER,
    updated_by INTEGER,
    created_at TIMESTAMP WITH TIME ZONE,
    updated_at TIMESTAMP WITH TIME ZONE,



    ## sale_items

    id SERIAL NOT NULL,
    sale_id INTEGER,
    product_id INTEGER,
    qty NUMERIC(15,4),
    unit_price NUMERIC(15,4),
    real_unit_price NUMERIC(15,4),
    discount_type VARCHAR(255),
    item_discount NUMERIC(15,4),
    tax_type VARCHAR(255),
    item_tax  NUMERIC(15,4),
    subtotal  NUMERIC(15,4), -- unit_price * qty
    created_at TIMESTAMP WITH TIME ZONE,
    updated_at TIMESTAMP WITH TIME ZONE,

   

### purchase module

    ## purchase

    id SERIAL NOT NULL,
    date  DATE,
    supplier_id INTEGER,
    sub_total NUMERIC(15,4), -- unit_price * quantity
    total_items INTEGER, -- total number of product types
    total_qty INTEGER,  -- total number of products
    total_product_discount  NUMERIC(15,4),
    
    order_discount  NUMERIC(15,4),
    order_discount_type  VARCHAR(255),
    total_discount  NUMERIC(15,4), -- total_product_discount + order_discount

    total_product_tax  NUMERIC(15,4),
    order_tax  NUMERIC(15,4),
    order_tax_type  VARCHAR(255),
    total_tax  NUMERIC(15,4), -- total_product_tax + order_tax
    total_charge NUMERIC(15,4),
    grand_total NUMERIC(15,4), -- sub_total - total_discount + total_tax
    net_payable NUMERIC(15,4), -- grand_total + total_charge
    
    paid_amount  NUMERIC(15,4),

    ordered_at TIMESTAMP WITH TIME ZONE,
    delivered_at TIMESTAMP WITH TIME ZONE,

    status VARCHAR(255),
    store_id  INTEGER,
    hold_ref  VARCHAR(255),
    remarks TEXT,

    created_by INTEGER,
    updated_by INTEGER,
    created_at TIMESTAMP WITH TIME ZONE,
    updated_at TIMESTAMP WITH TIME ZONE,



    ## sale_items

    id SERIAL NOT NULL,
    purchase_id INTEGER,
    product_id INTEGER,
    qty NUMERIC(15,4),
    unit_price NUMERIC(15,4),
    real_unit_price NUMERIC(15,4),
    discount_type VARCHAR(255),
    item_discount NUMERIC(15,4),
    tax_type VARCHAR(255),
    item_tax  NUMERIC(15,4),
    subtotal  NUMERIC(15,4), -- unit_price * qty
    created_at TIMESTAMP WITH TIME ZONE,
    updated_at TIMESTAMP WITH TIME ZONE,



### payment
    
    id              SERIAL NOT NULL,
    customerId      uuid,
    amount          number,
    paymentMethod   STRING,(Bank, Mobile Banking, Cash Payment)
    remarks         STRING,
    date            Date,



   



