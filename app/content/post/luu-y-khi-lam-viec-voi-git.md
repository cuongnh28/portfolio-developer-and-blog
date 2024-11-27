---
title: 'Những lưu ý quan trọng khi làm việc với git'
description: 'Bài viết này không dành cho những ai đã là master về git và git flow.'
image: '/images/git-cover.jpg'
date: '26/11/2024'
author: '© Nguyen Hong Cuong'
---

Git là một công cụ không thể thiếu đối với mỗi lập trình viên. Tuy nhiên, trong suốt hành trình sử dụng nó, nhiều người vẫn gặp phải một số vấn đề tưởng chừng đơn giản nhưng lại ảnh hưởng lớn đến hiệu quả công việc, đặc biệt là khi làm việc nhóm. 

Bài viết này sẽ giúp bạn nhận ra những sai lầm phổ biến khi sử dụng Git và làm thế nào để cải thiện quy trình làm việc của mình.

<strong> 1. Đặt branch name cần có quy tắc </strong> 

Hồi mới đi làm, khi nhận nhiệm vụ phát triển tính năng cập nhật thông tin người dùng, mình đã từng đặt tên nhánh như thế này:

*`cuongnh/updateUser`*

Các bạn có thấy quen không? Đây là cách đặt tên nhánh khá phổ biến với những người mới bắt đầu, giống như mình lúc đó. Tuy nhiên, vấn đề nảy sinh khi tính năng mình đang phát triển chưa được release và sếp yêu cầu giữ lại nhánh mà chưa merge vào main. Sau một thời gian dài, khi cần phải thực hiện việc merge lại, thì việc tìm kiếm nhánh đó trở nên vô cùng khó khăn vì ai còn nhớ được những gì đã làm từ mấy tuần trước? Vậy, làm thế nào để đặt tên nhánh một cách rõ ràng, dễ tìm và dễ quản lý hơn? Để mình sửa lại cách đặt tên nhánh trên một chút, nó nên là:

*`feature/AK3D-0128-update-user`*

**Cơ bản thôi, một branch name nên có đủ 3 thành phần chính:**
- Tên branch nên bắt đầu bằng từ `feature/` hoặc `bugfix/` tương ứng với tính năng hoặc sửa lỗi.
- Sau dấu `/` của prefix (feature/bugfix) nên là mã ticket (ví dụ ở trên là: `AK3D-0128`) -> mục đích rõ ràng, sau này khi sếp yêu cầu chúng ta merge lại phần code mà chúng ta đang làm dở thì chỉ cần tìm branch theo feature mà chúng ta đã làm mà thôi.
- Kế tiếp nên là summary về tính năng mà chúng ta đang làm -> mục đích là để khi làm việc với nhiều branch cùng lúc chúng ta sẽ tiết kiệm thời gian kiếm branch name nhằm switch.

Ngoài ra, tên branch nên chỉ được viết thường và sử dụng dấu `-` cho việc nối từ thay vì khoảng cách. Và nhớ rằng hãy luôn checkout nhánh này từ nhánh chính nhé.

---

<strong>2. Commit message</strong> 

Bạn đã từng thấy commit nào có dạng: `"update user info"`, hoặc `"add user info"` chưa?  
Nếu đang thấy nó trong dự án của mình, bạn chớ có làm theo, hoặc nếu tốt hơn nữa thì raise issue lên để cả team ngồi lại để có một phương án commit tốt hơn nhé.

Dù code có đảm bảo SOLID, clear đến đâu, thì việc đọc lại những dòng code đã tồn tại luôn là một thử thách đối với bất kỳ lập trình viên nào.

Ví dụ, khi bạn nhận được nhiệm vụ cải tiến một tính năng mới nhưng lại phải làm việc với rất nhiều đoạn code logic đã tồn tại, bạn sẽ luôn phải đặt câu hỏi: "Đoạn code này đang phục vụ mục đích gì?" Lúc này, ngoài việc đọc hiểu từng dòng code, thì việc sử dụng công cụ `git blame` để tìm ra người viết đoạn mã đó và hỏi lại họ là điều cực kỳ hữu ích, nhưng nếu không may người ấy đã không còn là đồng nghiệp của bạn, hoặc thậm chí … người đó cũng chẳng còn nhớ đến nó là gì 😣. Chính trong những tình huống như vậy, bạn mới nhận ra giá trị của một commit tốt và có ý nghĩa rõ ràng, giúp bạn và cả đội dễ dàng hiểu và làm việc lại với mã nguồn cũ.

### Tại sao lại như thế? Hãy cùng xem qua một ví dụ commit:
*`"feat:AK3D-0128: update user info"`*

Bạn nhận ra điều gì? Đây không chỉ là một dòng commit, mà là một thông tin quý giá. Mã ticket `"AK3D-0128"` cho biết yêu cầu cụ thể nào đang được thực hiện, trong khi phần tóm tắt `"update user info"` mô tả ngắn gọn công việc. Nhờ vậy, khi cần xem lại hoặc điều chỉnh, bạn có thể nhanh chóng xác định mục đích và bối cảnh của đoạn code. Điều này giúp tránh những câu hỏi mơ hồ như "Đoạn logic này để làm gì?", đồng thời giảm thiểu rủi ro khi sửa đổi các tính năng đã tồn tại.

**Đối với một commit message, chúng ta cần chú ý những nội dung như sau:**
- Đầu tiên, hãy đặt prefix (feat/fix) trước mỗi commit message. Quy tắc khá giống với việc tạo branch code.
- Mã ticket (`AK3D-0128`) nên được đặt ngay sau prefix rồi tiếp tục đến dấu hai chấm `:`.
- Sau đó là tóm tắt nội dung commit (ví dụ: `add user info`).
- Đối với dự án cá nhân không có mã ticket, chúng ta có thể gạch đầu dòng những ý chính trong những đoạn code thay đổi của mình nhằm giúp cho việc theo dõi nhật ký được thuận tiện hơn.

---

<strong>3. Squash commit trước khi tạo Pull Request</strong>

Squash commit đơn giản là một kỹ thuật giúp gộp nhiều commit lại làm một.

Nhiều lập trình viên có thói quen tạo commit mới sau mỗi ngày làm việc để tránh mất code nếu gặp sự cố với máy tính. Tuy nhiên, khi hoàn thiện tính năng và đã kiểm tra Unit Test cẩn thận trên máy local, nếu bạn tạo Pull Request với hàng loạt commit như vậy, nhánh main sẽ trở nên rối rắm và chứa nhiều commit thừa.

Thay vào đó, hãy squash tất cả các commit lại thành một trước khi tạo Pull Request. Việc này giúp giữ cho lịch sử commit của main gọn gàng và dễ theo dõi.

Bên cạnh việc main branch có một lịch sử commit đẹp, thì nó cũng làm cho những hậu bối, thậm chí bản thân mình dễ dàng trace lại lịch sử của một đoạn code, hơn là phải `git blame` liên tục để kiểm tra sự thay đổi từ trước khi có đoạn code mới của chúng ta.

---

*“Git là một kỹ năng quan trọng, và có rất nhiều kiến thức liên quan đến nó. Nhưng trong phạm vi bài viết, mình chỉ đề cập đến những lỗi sai mà mình thường thấy và có ảnh hưởng tiêu cực đến dự án nhất.”*

---

## Kết luận

Là một lập trình viên, chúng ta không chỉ quan tâm đến việc đoạn code có đang hoạt động hay không, mà điều quan trọng không kém chính là việc duy trì và phát triển sản phẩm trong tương lai sau này. Bởi, mình đã thấy những đoạn code, commit lởm khiến cho quá trình trace bug và phát triển trở nên phức tạp hơn rất nhiều. Và tệ hơn nữa, người ta so sánh nó như những bức tường yếu ớt, chỉ cần chờ một cơn gió đến thì nó sẽ sụp đổ.

---

*Xin phép mượn lời Bác Hồ để chế một đoạn trích nhỏ:*  
**Non sông Việt Nam có trở nên tươi đẹp hay không, sản phẩm của chúng ta thực hiện có thể phát triển để sánh vai với các cường quốc Ấn Độ được hay không, chính là nhờ một phần lớn ở những dòng commit code của các chúng ta, những người luôn muốn nhận mình là “thợ code”.**

**Xin hết …**
