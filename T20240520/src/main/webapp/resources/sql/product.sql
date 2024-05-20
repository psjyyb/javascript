create table tbl_product (
  prod_code char(4) primary key, -- P001, P002, P003...
  prod_name varchar2(100) not null, -- 상품이름.
  prod_desc varchar2(500) not null, -- 상품의 설명.
  price number not null, -- 상품의 원래가격.
  off_price number not null, -- 할인된 가격.
  like_it number default, 3 -- 1 ~ 5점의 평점.
  prod_image varchar2(100)
);

insert into tbl_product (prod_code,prod_name,prod_desc,price,off_price,like_it,prod_image)
values ('P001','과테말라 안티구아','과테말라 안티구아 맛있는 커피입니다',5000,4500,5,'과테말라 안티구아.jpg'); 
insert into tbl_product (prod_code,prod_name,prod_desc,price,off_price,like_it,prod_image)
values ('P002','나카라구아 아라비카','나카라구아 아라비카 맛있는 커피입니다',5500,4500,4,'나카라구아 아라비카.jpg');
insert into tbl_product (prod_code,prod_name,prod_desc,price,off_price,like_it,prod_image)
values ('P003','브라질 산토스','브라질 산토스 맛있는 커피입니다',6000,5000,5,'브라질 산토스.jpg');
insert into tbl_product (prod_code,prod_name,prod_desc,price,off_price,like_it,prod_image)
values ('P004','에티오피아 예가체프','에티오피아 예가체프 맛있는 커피입니다',4000,3500,3,'에티오피아 예가체프.jpg');
insert into tbl_product (prod_code,prod_name,prod_desc,price,off_price,like_it,prod_image)
values ('P005','케냐 오크라톡신','케냐 오크라톡신 맛있는 커피입니다',4500,3000,2,'케냐 오크라톡신.jpg');
insert into tbl_product (prod_code,prod_name,prod_desc,price,off_price,like_it,prod_image)
values ('P006','코스타리카 따라주','코스타리카 따라주 맛있는 커피입니다',3000,2500,1,'코스타리카 따라주신.jpg');

select *
       from (select *
            from tbl_product
            order by like_it desc)
       where rownum <= 4;

commit;