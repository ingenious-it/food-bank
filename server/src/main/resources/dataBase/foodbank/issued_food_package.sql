create table issued_food_package
(
    issuedid          int          not null
        primary key,
    issued_date       datetime(6)  null,
    issued_quantity   int          not null,
    package_type_name varchar(255) null,
    typeid            int          null,
    constraint FK15jr9xcheuvhm92lbf1e8oxd5
        foreign key (typeid) references package_type (typeid)
);

