create table delivery
(
    did           int          not null
        primary key,
    delivery_date datetime(6)  null,
    victim_nic    varchar(255) null,
    is_completed  bit          null
);

