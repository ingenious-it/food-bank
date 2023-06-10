create table registered_user
(
    id                   int          not null
        primary key,
    contact_number       int          not null,
    email                varchar(255) null,
    first_name           varchar(255) null,
    last_name            varchar(255) null,
    password             varchar(255) null,
    username             varchar(255) null,
    donator_flag         bit          null,
    phone_number         varchar(255) null,
    data_supplier_points double       not null,
    donater_points       double       not null,
    role                 varchar(255) null
);

