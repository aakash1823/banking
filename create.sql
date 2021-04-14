use bankcustomers;

create table customer (
    acnumber VARCHAR(6),
    custid VARCHAR(6),
    opening_balance INT,
    fname VARCHAR(30),
    ltname VARCHAR(30),
    city VARCHAR(15),
    mobileno VARCHAR(10),
    occupation VARCHAR(10),
    dob DATE,
    Email VARCHAR(255),
    image VARCHAR(45)
);

create table transaction_process (
    frm_acc_no VARCHAR(255),
    to_acc_no VARCHAR(255),
    amount VARCHAR(255),
    tran_status VARCHAR(255),
    id INT auto_increment,
    primary key(id)
);

INSERT INTO
    customer
VALUES
(
        'A00001',
        'C00001',
        '20000',
        'Ramesh',
        'Sharma',
        'Delhi',
        '9543198345',
        'Service',
        '1976-12-06',
        'ramesh@gmail.com',
        '1'
    );

INSERT INTO
    customer
VALUES
(
        'A00002',
        'C00002',
        '20000',
        'Avinash',
        'Minha',
        'Delhi',
        '9876532109',
        'Service',
        '1974-10-16',
        'avinash@gmail.com',
        '2'
    );

INSERT INTO
    customer
VALUES
(
        'A00003',
        'C00003',
        '20000',
        'Rahul',
        'Rastogi',
        'Delhi',
        '9765178901',
        'Student',
        '1981-09-26',
        'rahul@gmail.com',
        '3'
    );

INSERT INTO
    customer
VALUES
(
        'A00004',
        'C00004',
        '20000',
        'Parul',
        'Gandhi',
        'Delhi',
        '9876532109',
        'Housewife',
        '1976-11-03',
        'parul@gmail.com',
        '4'
    );

INSERT INTO
    customer
VALUES
(
        'A00005',
        'C00005',
        '20000',
        'Naveen',
        'Aedekar',
        'Mumbai',
        '8976523190',
        'Service',
        '1976-09-19',
        'naveen@gmail.com',
        '5'
    );

INSERT INTO
    customer
VALUES
(
        'A00006',
        'C00006',
        '20000',
        'Chitresh',
        'Barwe',
        'Mumbai',
        '7651298321',
        'Student',
        '1992-11-06',
        'chitresh@gmail.com',
        '6'
    );

INSERT INTO
    customer
VALUES
(
        'A00007',
        'C00007',
        '20000',
        'Amit',
        'Borkar',
        'Mumbai',
        '9875189761',
        'Student',
        '1981-09-06',
        'amit@gmail.com',
        '7'
    );

INSERT INTO
    customer
VALUES
(
        'A00008',
        'C00008',
        '20000',
        'Nisha',
        'Damle',
        'Mumbai',
        '7954198761',
        'Service',
        '1975-12-03',
        'nisha@gmail.com',
        'g'
    );

INSERT INTO
    customer
VALUES
(
        'A00009',
        'C00009',
        '20000',
        'Abhishek',
        'Dutta',
        'Kolkata',
        '9856198761',
        'Service',
        '1973-05-22',
        'abhishek@gmail.com',
        '8'
    );

INSERT INTO
    customer
VALUES
(
        'A00010',
        'C00010',
        '20000',
        'Shankar',
        'Nair',
        'Chennai',
        '8765489076',
        'Service',
        '1976-07-12',
        'shankar@gmail.com',
        '9'
    );