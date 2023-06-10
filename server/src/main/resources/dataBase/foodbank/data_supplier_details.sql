create table data_supplier_details
(
    data_supplier_id int          not null
        primary key,
    description      varchar(255) null,
    email            varchar(255) null,
    name             varchar(255) null,
    phone_number     int          not null
);

