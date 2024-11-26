---
title: 'Những lưu ý quan trọng khi làm việc với git'
description: 'Bài viết này không dành cho những ai đã là master về git và git flow.'
image: '/images/git-cover.jpg'
date: '26/11/2024'
author: '© Nguyen Hong Cuong'
---

Nếu là một lập trình viên, ắt hẳn git là một trong những kỹ năng được sử dụng nhiều nhất. Tuy nhiên, trong quá trình làm việc cũng như phỏng vấn ứng viên cho vị trí lập trình, mình lại thấy có khá nhiều vấn đề trong cách một số bạn làm việc với git.

Thật ra, những lưu ý dưới đây không phải là những điều bắt buộc, bởi dù không có nó, chương trình của bạn vẫn đang được vận hành một cách bình thường. Nhưng, một ứng dụng tốt không đơn thuần ở việc nó còn đang hoạt động được, mà đó còn phải là một ứng dụng có thể đáp ứng được những yêu cầu mới, mở rộng và phát triển trong tương lai. Vậy, những lưu ý dưới đây ảnh hưởng thế nào đến những câu chuyện nói trên, hãy cùng mình đi lần lượt nhé.

<strong> 1. Đặt branch name cần có quy tắc </strong> 

Hồi mới đi làm, khi nhận phát triển tính năng cập nhật thông tin user, mình đã từng để branch name như sau:

*`cuongnh/updateUser`*

Vâng, các bạn có thấy quen không ạ? Đây là một cách đặt branch name khá phổ biến với một số bạn mới, như mình hồi đó. Tuy nhiên, giả sử tính năng mà bạn đang phát triển được sếp thông báo rằng chưa release, code không merge vào nhánh main mà giữ lại ở branch đang phát triển. Mãi một thời gian rất lâu sau đó cần merge vào, thì công cuộc tìm kiếm sẽ thật khó khăn vì ai mà nhớ nổi thứ mình đã làm từ những tuần trước. Vậy, branch name nên đặt theo quy tắc nào? Để mình sửa lại branch-name ở trên nhé, nó nên là:

*`feature/AK3D-0128-update-user`*

**Cơ bản thôi, một branch name nên có đủ 3 thành phần chính:**
- Tên branch nên bắt đầu bằng từ `feature/` hoặc `bugfix/` tương ứng với tính năng hoặc sửa lỗi.
- Sau dấu `/` của prefix (feature/bugfix) nên là mã ticket (ví dụ ở trên là: `AK3D-0128`) -> mục đích rõ ràng, sau này khi sếp yêu cầu chúng ta merge lại phần code mà chúng ta đang làm dở thì chỉ cần tìm branch theo feature mà chúng ta đã làm mà thôi.
- Kế tiếp nên là summary về tính năng mà chúng ta đang làm -> mục đích là để khi làm việc với nhiều branch cùng lúc chúng ta sẽ tiết kiệm thời gian kiếm branch name nhằm switch.

Ngoài ra, tên branch nên chỉ được viết thường và sử dụng dấu `-` cho việc nối từ thay vì khoảng cách. Và nhớ rằng hãy luôn checkout nhánh này từ nhánh chính nhé.

---

<strong>2. Commit message</strong> 

Bạn đã từng thấy commit nào có dạng: `update user info`, hoặc `add user info` chưa?  
Nếu đang thấy nó trong dự án của mình, bạn chớ có làm theo, hoặc nếu tốt hơn nữa thì raise issue lên để cả team ngồi lại để có một phương án commit tốt hơn nhé.

Dù code có đảm bảo SOLID, clear đến đâu, thì việc đọc lại những dòng code đã tồn tại luôn là một thử thách đối với bất kỳ lập trình viên nào.

Ví dụ: khi nhận task enhance một tính năng mới với rất nhiều đoạn code logic đã tồn tại, chúng ta luôn cần đặt câu hỏi rằng: đoạn code này đang phục vụ mục đích gì? Lúc này, bên cạnh việc dịch code, thì `git blame` xem ai đã viết đoạn code đó để hỏi là một việc hết sức nên làm, nhưng nếu không may người ấy đã không còn là đồng nghiệp của bạn, hoặc thậm chí … người đó cũng chẳng còn nhớ đến nó là gì 😣. Vâng, và đó là lúc bạn thấy được sức mạnh của một commit tốt là thế nào.

### Tại sao lại như thế? Đây là một commit chuẩn:
*`feat:AK3D-0128: update user info`*

Bạn thấy gì không ạ? Vâng, đó lại là mã ticket (`AK3D-0128`) kèm theo tóm tắt nội dung chức năng (`update user info`) chúng ta đang làm. Điều này sẽ thật có ý nghĩa giúp chúng ta xác định được những logic mà tiền bối chúng ta đã thêm vào đến từ yêu cầu cụ thể nào. Tránh việc những câu hỏi mông lung không đáng có, cũng giảm thiểu rủi ro đến những tính năng đã tồn tại trước nay.

**Đối với một commit message, chúng ta cần chú ý những nội dung như sau:**
- Đầu tiên, hãy đặt prefix (feat/fix) trước mỗi commit message. Quy tắc khá giống với việc tạo branch code.
- Mã ticket (`AK3D-0128`) nên được đặt ngay sau prefix rồi tiếp tục đến dấu hai chấm `:`.
- Sau đó là tóm tắt nội dung commit (ví dụ: `add user info`).
- Đối với dự án cá nhân không có mã ticket, chúng ta có thể gạch đầu dòng những ý chính trong những đoạn code thay đổi của mình nhằm giúp cho việc theo dõi nhật ký được thuận tiện hơn.

---

<strong>3. Squash commit trước khi tạo Pull Request</strong>

Squash commit đơn giản là một kỹ thuật giúp gộp nhiều commit lại làm một.

Chắc hẳn nhiều người trong chúng ta tạo ra commit code mới sau mỗi ngày làm việc, để hạn chế rủi ro mất code khi gặp vấn đề với máy tính của mình. Và khi hoàn thiện tính năng, Unit Test ở phía Local xong xuôi, nếu chúng ta tạo PR với nhiều commit cỡ này, thì nhánh main branch của chúng ta sẽ thật rắc rối, và cũng thừa thãi với nhiều commit như vậy.

Thay vào đó, hãy squash chúng lại, chỉ để 1 commit duy nhất với ngần ấy code thay đổi, rồi mới tạo Pull Request.

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
